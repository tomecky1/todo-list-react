import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      {
        id: 1,
        content: "zrobić bulion",
        done: true,
      },
    ],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks[index].done = !state.tasks[index].done;
    },
    removeTask: ({ tasks }, { payload }) => {
      tasks.splice(payload, 1);
    },
    setAllDone: ({ tasks }, action) => {
      const taskIndex = () =>
        tasks.findIndex((task) => task.done === action.payload);

      tasks.forEach(() => {
        taskIndex();
      });
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
} = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export default tasksSlice.reducer;

console.log(
  tasksSlice.reducer(
    { tasks: [] },
    addTask({ content: "Nauczyć się Reduxa", done: true })
  )
);
