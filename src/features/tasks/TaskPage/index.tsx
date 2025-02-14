import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getTaskById} from "../tasksSlice";
import {RootState} from "../../../store";

interface Params {
    id: string;
}

function TaskPage() {
    const params = useParams<Params>();
    const task = useSelector((state:RootState) => getTaskById(state, params.id));
    return (
        <Container>
            <Header title="Szczegóły zadania"/>
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😒"}
                children={
                    task ? (
                        <>
                            <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
                        </>
                    ) : null
                }
            />
        </Container>
    );
}

export default TaskPage;
