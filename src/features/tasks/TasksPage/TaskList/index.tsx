import {useLocation} from "react-router-dom";
import {removeTask, selectHideDone, selectTasksByQuery, toggleTaskDone,} from "../../tasksSlice";
import {Button, Content, Items, StyledLink, TasksWrapper} from "./styled";
import {useSelector} from "react-redux";
import searchQueryParam from "../hooks/searchQueryParamName";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {RootState} from "../../../../store";


const TaskList = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParam);

    const hideDone = useAppSelector(selectHideDone);
    const tasks = useSelector((state:RootState) => selectTasksByQuery(state, query));
    const dispatch = useAppDispatch();
    return (
        <>
            <TasksWrapper>
                {tasks.map((task: { done: boolean | undefined; id: any; content: string; }) => (
                    <Items hidden={task.done && hideDone}>
                        <Button
                            $toggleDone
                            onClick={() => dispatch(toggleTaskDone(task.id))}
                        >
                            {task.done ? "✔️" : ""}
                        </Button>
                        <Content $done={task.done}>
                            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
                        </Content>

                        <Button $remove onClick={() => dispatch(removeTask(task.id))}>
                            🗑️
                        </Button>
                    </Items>
                ))}
            </TasksWrapper>
        </>
    );
};

export default TaskList;
