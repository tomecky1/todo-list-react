
const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
    if (tasks.Length === 0) {
        return null;
    }
    return (
        <div className="buttons">
            <button className="buttonhideDone" onClick={toggleHideDone}>
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                onClick={() => setAllDone()}
                className="buttonDoneAllTasks"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
};

export default Buttons;