import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../tasksSlice";
import Form from "./Form";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header/index";
import Container from "../../../common/Container";
import { Search } from "./Search";
import TaskList from "./TaskList";

const TasksPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Container>
      <Header />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={
          loading ? (
            <div className="loadingText">Pobieranie...</div>
          ) : (
            <button
              className="buttonGetTasks"
              onClick={() => dispatch(fetchExampleTasks())}
            >
              Pobierz przykładowe zadania
            </button>
          )
        }
        children={<Form />}
      />

      <Section title="Wyszukiwarka" children={<Search />} />
      <Section title="Lista zadań:" extraHeaderContent={<Buttons />} />
      <TaskList />
    </Container>
  );
};

export default TasksPage;
