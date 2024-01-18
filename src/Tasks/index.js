const Tasks = ({ tasks, hideDone }) => (
    <ul className="list">
        {tasks.map(task => (
            <li className={`list__item${task.done && hideDone ? " list__item--hidden" : ""}
            `}>
                <button className="buttonCheck">{task.done ? "✔️" : ""}</button>
                <span className={`list__item--content${task.done ? " list__item--done" : ""}`}>{task.content}</span>
                <button className="buttonRemove">🗑️</button>
            </li>
        ))}
    </ul>
);

export default Tasks;