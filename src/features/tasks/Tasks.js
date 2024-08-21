import Form from "../../features/tasks/Form/index";
import Buttons from "../../features/tasks/Buttons/index";
import Section from "../../common/Section/index";
import Header from "../../common/Header/index";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";
import TaskList from "./TaskList";

function Tasks() {
  const {
    tasks,
    hideDone,
    removeTask,
    toggleTaskDone,
    toggleHideDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <Header />
      <Section
        title="Dodaj nowe zadanie"
        children={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań:"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
        children={
          <TaskList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
            localStorageTasks={localStorage}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
