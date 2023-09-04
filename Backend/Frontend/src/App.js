import './App.css';
import React from 'react';
import TodoList from "./components/TodoList"
import {EditTaskModal} from "./components/Row/EditTaskModal"

function App() {
  return (
    <>
      {/* <EditTaskModal /> */}
      <div className='bg-gradient-to-br from-blue-900 to-purple-900 h-[100vh]'>
        <TodoList />
      </div>
    </>
  );
}

export default App;
