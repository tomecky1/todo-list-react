import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchExampleTasks, selectTasks, setAllDone, toggleHideDone} from "../tasksSlice";

const Buttons = () => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();

    if (tasks.length === 0) {
        return null;
    }
    return (
        <div className="buttons">
            <button
                onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </button>
            <button
                className="buttonhideDone"
                onClick={() => dispatch(toggleHideDone())}
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                // disabled={tasks.every(({done}) => done)}
                onClick={() => dispatch(setAllDone())}
                className="buttonDoneAllTasks"
            >
                Ukończ wszystkie
            </button>
        </div>
    );
};

export default Buttons;
