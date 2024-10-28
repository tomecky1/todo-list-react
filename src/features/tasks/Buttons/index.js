import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchExampleTasks,
  selectTasks,
  setAllDone,
  toggleHideDone,
} from "../tasksSlice";

const Buttons = () => {
  const { hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <div className="buttons">
      <button
        className="buttonGetTasks"
        onClick={() => dispatch(fetchExampleTasks())}
      >
        Pobierz przykładowe zadania
      </button>
      <button
        className="buttonHideDone"
        onClick={() => dispatch(toggleHideDone())}
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        // disabled={tasks.every(({ done }) => done)}
        onClick={() => dispatch(setAllDone())}
        className="buttonDoneAllTasks"
      >
        Ukończ wszystkie
      </button>
    </div>
  );
};

export default Buttons;
