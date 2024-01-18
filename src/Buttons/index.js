const Buttons = ({ tasks, hideDone }) => {
    if (tasks.Length === 0) {
        return null;
    }
    return (
        <div className="buttons">
            <button className="buttonhideDone">
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="buttonDoneAllTasks"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
};

export default Buttons;