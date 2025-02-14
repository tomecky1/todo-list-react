import {fetchExampleTasks, selectLoading} from "../tasksSlice";
import Form from "./Form";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import {Search} from "./Search";
import TaskList from "./TaskList";
import {useAppDispatch, useAppSelector} from "../../../hooks";

const TasksPage = () => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector(selectLoading);

    return (
        <Container>
            <Header title={"Lista zadań"}/>
            <Section
                title="Dodaj nowe zadanie"
                extraHeaderContent={
                    loading ? (
                        <div className="loadingText">Pobieranie...</div>
                    ) : (
                        <button
                            className="buttonGetTasks"
                            onClick={async () => {
                                try {
                                    await dispatch(fetchExampleTasks());
                                } catch (error) {
                                    console.error("Błąd podczas pobierania zadań:", error);
                                    alert("Sorka, nie udało się pobrać przykładowych zadań 😒");
                                }
                            }}
                        >
                            Pobierz przykładowe zadania
                        </button>
                    )
                }
            >
                <Form/>
            </Section>

            <Section title="Wyszukiwarka">
                <Search/>
            </Section>
            <Section title="Lista zadań:" extraHeaderContent={<Buttons/>}>
                <TaskList/>
            </Section>
        </Container>
    );
};

export default TasksPage;
