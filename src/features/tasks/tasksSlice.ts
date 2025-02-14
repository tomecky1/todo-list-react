import {createSlice, nanoid} from "@reduxjs/toolkit";
import {getTasksFromLocalStorage} from "./tasksLocalStorage";
import {RootState} from "../../store";

interface Task {
  id: string;
  content: string;
  done: boolean;
}

interface TasksState {
  tasks: Task[];
  hideDone: boolean;
  loading: boolean;
}



const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage() as Task[],
    hideDone: false,
    loading: false,
    id: nanoid(),
  } as TasksState,
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks[index].done = !state.tasks[index].done;
    },
    removeTask: (state, { payload: taskId }) => {
      const index = state.tasks.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
    },
    setAllDone: (state) => {
      for (const task of state.tasks) {
        task.done = true;
      }
    },
    fetchExampleTasks: (state) => {
      state.loading = true;
    },
    setTasks: (state, { payload }: { payload: Task[] }) => {
      state.tasks = payload;
      state.loading = false;
    },

  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  setTasks,
} = tasksSlice.actions;
const selectTasksState = (state: RootState) => state.tasks;

export const selectTasks = (state: RootState) => state.tasks;
export const getTaskById = (state: RootState, taskId: string) =>
    selectTasks(state).tasks.find(({ id }) => id === taskId);

export const selectTasksByQuery = (state:RootState, query: string | null) => {
  const tasks = selectTasks(state).tasks;
  if (!query || query.trim() === "") return tasks;
  return tasks.filter((task) =>
    task.content?.toUpperCase().includes(query.trim().toUpperCase())
  );
};
export const selectHideDone = (state:RootState) => selectTasksState(state).hideDone;
export const selectLoading = (state: RootState) => selectTasksState(state).loading;

export default tasksSlice.reducer;
