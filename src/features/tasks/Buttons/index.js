import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks } from "../tasksSlice";
import { toggleHideDone } from "../tasksSlice";
import { setAllDone } from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  if (tasks.length === 0) {
    return null;
  }
  return (
    <div className="buttons">
      <button
        className="buttonhideDone"
        onClick={() => dispatch(toggleHideDone())}
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        disabled={tasks.every(({ done }) => done)}
        onClick={() => dispatch(setAllDone())}
        className="buttonDoneAllTasks"
      >
        Ukończ wszystkie
      </button>
    </div>
  );
};

export default Buttons;
