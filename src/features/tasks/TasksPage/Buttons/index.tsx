import React from "react";
import {selectTasks, setAllDone, toggleHideDone} from "../../tasksSlice";
import {useAppDispatch, useAppSelector} from "../../../../hooks";

const Buttons = () => {
    const {tasks, hideDone} = useAppSelector(selectTasks);
    const dispatch = useAppDispatch();

    interface Props {
        done: boolean;
    }

    return (
        <div className="buttons">
            <button
                className="buttonHideDone"
                onClick={() => dispatch(toggleHideDone())}
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                disabled={tasks.every(({done}: Props) => done)}
                onClick={() => dispatch(setAllDone())}
                className="buttonDoneAllTasks"
            >
                Ukończ wszystkie
            </button>
        </div>
    );
};

export default Buttons;
