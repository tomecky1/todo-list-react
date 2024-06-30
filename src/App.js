import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useTasks } from "./useTasks";

function App() {
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
          <Tasks
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

export default App;
