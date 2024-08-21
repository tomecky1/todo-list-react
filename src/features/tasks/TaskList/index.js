import { TasksWrapper } from "./styled";
import { Items, Content, Button } from "./styled";

const TaskList = ({
  tasks,
  hideDone,
  removeTask,
  toggleTaskDone,
  localStorage,
}) => (
  <TasksWrapper>
    {tasks.map((task) => (
      <Items hidden={task.done && hideDone}>
        <Button toggleDone onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✔️" : ""}
        </Button>
        <Content done={task.done}>
          {task.id}. {task.content}{" "}
        </Content>

        <Button
          remove
          onClick={() => {
            removeTask(task.id);
            localStorage.removeItem("tasks");
          }}
        >
          🗑️
        </Button>
      </Items>
    ))}
  </TasksWrapper>
);

export default TaskList;
