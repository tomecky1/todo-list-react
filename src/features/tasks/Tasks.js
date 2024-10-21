import Form from "../../features/tasks/Form/";
import Buttons from "../../features/tasks/Buttons/";
import Section from "../../common/Section/";
import Header from "../../common/Header/index";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";
import TaskList from "./TaskList";

function Tasks() {
  const {
    //  tasks,
    // hideDone,
    // removeTask,

    // toggleHideDone,
    setAllDone,
  } = useTasks();

  return (
    <Container>
      <Header />
      <Section title="Dodaj nowe zadanie" children={<Form />} />
      <Section
        title="Lista zadań:"
        extraHeaderContent={<Buttons setAllDone={setAllDone} />}
        children={<TaskList localStorageTasks={localStorage} />}
      />
    </Container>
  );
}

export default Tasks;
