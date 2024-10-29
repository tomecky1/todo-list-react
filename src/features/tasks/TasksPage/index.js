import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";
import Form from "./Form";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header/index";
import Container from "../../../common/Container";
import { Search } from "./Search";
import TaskList from "./TaskList";

function TasksPage() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Header />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={
          <button
            className="buttonGetTasks"
            onClick={() => dispatch(fetchExampleTasks())}
          >
            Pobierz przykładowe zadania
          </button>
        }
        children={<Form />}
      />
      <Section title="Wyszukiwarka" children={<Search />} />
      <Section
        title="Lista zadań:"
        extraHeaderContent={<Buttons />}
        children={<TaskList localStorageTasks={localStorage} />}
      />
    </Container>
  );
}

export default TasksPage;
