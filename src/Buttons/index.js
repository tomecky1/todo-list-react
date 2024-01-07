const Buttons = (props) => {
    if (props.tasks.Length === 0) {
        return null;
    }
    return (
        <div className="buttons">
            <button className="buttonHideDoneTasks">
                {props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="buttonDoneAllTasks"
                disabled={props.tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
};

export default Buttons;