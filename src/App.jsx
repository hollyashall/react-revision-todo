import "./App.scss";
import Nav from "./components/Nav/Nav";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState } from "react";
import List from "./components/List/List";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInput = (text) => {
    let taskItem = {
      taskName: text.target.value,
      isChecked: false,
    };

    setTask(taskItem);
  };

  const handleDelete = (task) => {
    console.log(task);
    const filteredTaskItems = tasks.filter((item) => item !== task);
    setTasks(filteredTaskItems);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!task) return alert("enter a to do please");
    setTasks([...tasks, task]);
  };

  const handleReset = () => {
    setTasks("");
    console.log("reset");
  };

  const toggleCheck = (task) => {
    const updatedTaskArray = tasks.map((t) => {
      if (t.taskName === task.taskName) {
        t.isChecked = true;
      }
      return t;
    });
    setTasks(updatedTaskArray);
  };

  return (
    <div className="app">
      <nav>
        <Nav handleReset={handleReset} />
      </nav>
      <section className="searchBar">
        <SearchBar onInput={handleInput} handleSubmit={handleSubmit} />
      </section>
      <div className="list">
        <List
          tasks={tasks}
          handleDelete={handleDelete}
          toggleCheck={toggleCheck}
        />
      </div>
    </div>
  );
};

export default App;
