import { selectTasks } from "../tasksSlice";
import { TasksWrapper } from "./styled";
import { Items, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone } from "../tasksSlice";
import { removeTask } from "../tasksSlice";

const TaskList = ({ localStorage }) => {
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
               {task.content}
            </Content>

            <Button
              remove
              onClick={() => dispatch(removeTask(task.id))}
              // localStorage.removeItem("tasks");
            >
              🗑️
            </Button>
          </Items>
        ))}
      </TasksWrapper>
    </>
  );
};

export default TaskList;
