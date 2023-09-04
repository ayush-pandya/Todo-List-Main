import React, { useState, useEffect, useCallback } from "react";
import { Row } from "../Row/Row";
import { Loader } from "../Loader";
import { useAddTask } from "../../hooks/add-task";
import { useGetTasks } from "../../hooks/get-tasks";

function Table() {
  const [taskName, setTaskName] = useState("");
  const [deleting, setDeleting] = useState(false);
  const tasks = useGetTasks();

  const { addTask } = useAddTask();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "add-task") {
      setTaskName(value);
    }
  };

  const handleDeleteAll = useCallback(async () => {
    setDeleting(true);
    await setTimeout(() => {
      console.log("Deleting all tasks.");
      localStorage.removeItem("names");
      setDeleting(false);
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      <div className="flex mx-32 mt-4 gap-4">
        <input
          type="text"
          className="rounded-xl p-2 grow"
          name="add-task"
          placeholder="Task"
          onChange={handleChange}
          value={taskName}
        ></input>
        <button
          className="bg-blue-800 text-white rounded-xl p-2 disabled:bg-blue-300"
          onClick={() => {
            let taskId = Date.now();
            addTask(taskId, taskName);
            setTaskName("");
          }}
          disabled={taskName.length === 0}
        >
          Add
        </button>
        {deleting ? (
          <Loader />
        ) : (
          <button
            className="bg-blue-800 text-white rounded-xl p-2 disabled:bg-blue-300"
            onClick={handleDeleteAll}
            disabled={tasks.length === 0}
          >
            Delete All
          </button>
        )}
      </div>
      <div className="mx-4 mt-4">
      <span className="ml-5 font-bold font-sans text-3xl text-white tracking-tight">Tasks</span>
      {tasks.map((task) => (
        <Row
          task={task.task}
          className={
            "bg-gradient-to-r from-cyan-600 to-green-600 rounded-md p-1 mx-3 my-2"
          }
          id={task.id}
          handleChange={handleChange}
          key={task.id}
        />
      ))}
      </div>
    </React.Fragment>
  );
}

export default Table;
