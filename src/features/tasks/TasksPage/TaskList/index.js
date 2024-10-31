import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {
  removeTask,
  selectTasksByQuery,
  toggleTaskDone,
  selectHideDone,
} from "../../tasksSlice";
import { Button, Content, Items, TasksWrapper, StyledLink } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import searchQueryParam from "../hooks/searchQueryParamName";

const TaskList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(searchQueryParam);

  const hideDone = useSelector(selectHideDone);
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
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
              <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
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
