import { useEffect, useState } from "react";
import { FormCreateTask } from "./components/form/FormCreateTask.jsx";
import { ListActions } from "./components/list-actions/ListActions";
import { TaskList } from "./components/taks-list/TaskList";
// import { tasks } from "./data/tasks.js";

function App() {
  const storageKey = 'todo-data';
  const [taskList, setTaskList] = useState([]);
  const [id, setId] = useState(0);

  // func, be antro parametro
  // pasileidzia kai ispiesiamas komponentas
  // pasileidzia kai perpiesiamas komponentas
  useEffect(() => {
    console.log('Pasileidi "APP" komponentas...');
  });

  // func + []
  // antras parametras be reiksmiu (tuscias masyvas)
  // pasileidzia tik pirma karta piesiant komponenta
  useEffect(() => {
    console.log('"APP" - tuscias masyvas');
  }, []);

  // func + [...]
  // antras parametras yra ne tuscias masyvas
  // i ji ieina "useState" parametrai, kuriu reiksmems kintant
  // reikia paleisti sia funkcija
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(taskList));
  }, [taskList]);

  function addTask(taskText, taskColor) {
    setTaskList(prev => [
      ...prev,
      {
        id: id + 1,
        text: taskText,
        color: taskColor,
        state: 'todo',
      },
    ]);
    setId(prev => prev + 1);
  }

  function updateTaskText(id, newText) {
    setTaskList(prev => prev.map(task => ({
      ...task,
      text: task.id === id ? newText : task.text,
    })));
  }

  function updateTaskColor(id, newColor) {
    setTaskList(prev => prev.map(task => ({
      ...task,
      color: task.id === id ? newColor : task.color,
    })));
  }

  function updateTaskState(id) {
    setTaskList(prev => prev.map(task => ({
      ...task,
      state: task.id === id ? 'done' : task.state,
    })));
  }

  function removeTask(id) {
    setTaskList(prev => prev.filter(task => task.id !== id));
  }

  return (
    <main>
      <h1>Todo</h1>
      <div>
        <p>Viso užduočių: {taskList.length}</p>
        <p>Likusios atlikti užduotys: {taskList.length}</p>
        <p>Atliktos užduotys: -</p>
        <p>Ištrintos užduotys: -</p>
      </div>
      <FormCreateTask addTaskCallback={addTask} />
      <ListActions />
      <TaskList data={taskList}
        updateTaskText={updateTaskText}
        updateTaskColor={updateTaskColor}
        updateTaskState={updateTaskState}
        removeTask={removeTask} />
    </main>
  );
}

export default App;