const localStorageKey = "tasks";

export const saveTasksInLocalStorage = (tasks) =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () => {
  const tasksFromStorage = localStorage.getItem(localStorageKey);
  try {
    return tasksFromStorage ? JSON.parse(tasksFromStorage) : [];
  } catch (error) {
    console.error("Błąd podczas parsowania zadań z localStorage:", error);
    return [];
  }
};
