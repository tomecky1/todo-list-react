import { useState, useEffect } from "react";

export const useTasks = () => {
  const localStorageTasks = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(
    [
      { id: 1, content: "Zrobić pranie", done: false },
      { id: 2, content: "Zrobić obiad", done: true },
      { id: 3, content: "Usmażyc frytki", done: false },
    ],

    localStorageTasks || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const addNewTask = (newTaskContent) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };
  return { tasks, removeTask, toggleTaskDone, setAllDone, addNewTask };
};
