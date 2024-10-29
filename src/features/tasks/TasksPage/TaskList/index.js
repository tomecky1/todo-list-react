import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { removeTask, selectTasks, toggleTaskDone } from "../../tasksSlice";
import { Button, Content, Items, TasksWrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";

const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <>
      <TasksWrapper>
        {tasks.map((task) => (
          <Items hidden={task.done && hideDone}>
            <Button
              toggleDone
              onClick={() => dispatch(toggleTaskDone(task.id))}
            >
              {task.done ? "✔️" : ""}
            </Button>
            <Content done={task.done}>
              <Link to={`/zadania/${task.id}`}>{task.content}</Link>
            </Content>

            <Button remove onClick={() => dispatch(removeTask(task.id))}>
              🗑️
            </Button>
          </Items>
        ))}
      </TasksWrapper>
    </>
  );
};

export default TaskList;