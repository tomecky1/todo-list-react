import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    loading: false,
    id: nanoid(),
  },
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
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
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
const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state);
export const getTaskById = (state, taskId) =>
  selectTasks(state).tasks.find(({ id }) => id === taskId);
export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state).tasks;
  if (!query || query.trim() === "") return tasks;
  return tasks.filter((task) =>
    task.content.toUpperCase().includes(query.trim().toUpperCase())
  );
};
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectLoading = (state) => selectTasksState(state).loading;

export default tasksSlice.reducer;
