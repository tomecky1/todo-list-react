import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "przejść na Reacta", done: false },
    { id: 2, content: "wypić kawę", done: true }
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };


  return (
    <Container>
      <Header />
      <Section
        title="Dodaj nowe zadanie"
        children={<Form />}
      />
      <Section
        title="Lista zadań:"
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />}
        children={<Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} />}
      />
    </Container>
  );
}

export default App;
