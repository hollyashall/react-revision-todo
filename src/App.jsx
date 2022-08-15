import "./App.scss";
import Nav from "./components/Nav/Nav";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState } from "react";
import List from "./components/List/List";

// let taskItem = [];

const App = () => {
  //add entry from input bar into list
  const [task, setTask] = useState("Nothing to see yet..");

  const handleInput = (text) => {
    if (!text) return alert("enter a to do please");

    let taskItem = text.target.value;
    setTask(taskItem);
    // setTask(((prevState) => [
    //   ...prevState,
    //   { text, checked: false, id: Math.random() },
    // ]))
  };

  //add task to list below
  const handleSubmit = () => {
    // figure out how to add task items to list?
  };

  //handle reset
  const handleReset = () => {
    setTask("");
    console.log("reset");
  };

  return (
    <div className="app">
      <nav>
        <Nav handleReset={handleReset} />
      </nav>
      <section>
        <SearchBar onInput={handleInput} />
      </section>
      <div>
        <List task={task} />
      </div>
    </div>
  );
};

export default App;
