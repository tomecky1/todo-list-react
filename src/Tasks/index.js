const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="list">
        {tasks.map(task => (
            <li className={`list__item${task.done && hideDone ? " list__item--hidden" : ""}
            `}>
                <button className="buttonCheck"
                    onClick={() => toggleTaskDone(task.id)}
                >{task.done ? "✔️" : ""}</button>
                <span className={`list__item--content${task.done ? " list__item--done" : ""}`}>{task.id}. {task.content} </span>
                <button className="buttonRemove" onClick={() => { removeTask(task.id); localStorage.removeItem("tasks"); }}
                >🗑️</button>
            </li>
        ))}
    </ul>
);

export default Tasks;