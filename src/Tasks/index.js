const Tasks = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li className={`list__item${task.done && props.hideDoneTasks ? " list__item--hidden" : ""}
            `}>
                <button className="buttonCheck">{task.done ? "✔️" : ""}</button>
                <span className={`list__item--content${task.done ? " list__item--done" : ""}`}>{task.content}</span>
                <button className="buttonRemove">🗑️</button>
            </li>
        ))}
    </ul>
);

export default Tasks;