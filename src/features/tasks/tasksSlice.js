import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
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
    removeTask: ({ tasks }, { payload: taskId }) => {
      tasks.splice(taskId, 1);
    },
    setAllDone: (state) => {
      for (const task of state.tasks) {
        task.done = true;
      }
    },
    fetchExampleTasks: () => {},
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
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

export default tasksSlice.reducer;
