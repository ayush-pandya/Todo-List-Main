import React, { useState } from "react";
import CompletedTask from "./CompletedTask/CompletedTask";
import TodoHeader from "./Header/TodoHeader";
import Table from "./Table/Table";

function TodoList() {
  const [completedTask, setCompletedTask] = useState([]);

  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Table;
      break;
    case "/completedTask":
      Component = CompletedTask;
      break;
  }
  function Add(params) {
    fetch('http://localhost:4000/add', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "id": 78912 })
      })
     .then(response => response.json())
     .then(response => console.log(JSON.stringify(response)))
  }
  return (
    <React.Fragment>
      <header>
        <TodoHeader />
      </header>
      {/* <nav><TodoNavbar /></nav> */}
      <button onClick={() => Add("Ayush")}>Send Request</button>
      <section>
        <Component
          setCompletedTask={setCompletedTask}
          completedTask={completedTask}
        />
      </section>
      {/* <section><TodoRows /></section>
        <footer><TodoFooter /></footer> */}
    </React.Fragment>
  );
}

export default TodoList;
