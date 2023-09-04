import React, { useState, useEffect, useCallback } from "react";
import { Row } from "../Row/Row";
import { DottedLoader, Loader } from "../Loader";
import { useAddTask } from "../../hooks/add-task";
import { useGetTasks } from "../../hooks/get-tasks";

function Table() {
  const [taskName, setTaskName] = useState("");
  const [deleting, setDeleting] = useState(false);

  const {data: tasks, isLoading, refetch} = useGetTasks();

  const { AddTask } = useAddTask();

  const handleChange = (event) => {
    const { value } = event.target;
      setTaskName(value);
  };

  const handleDeleteAll = useCallback(async () => {
    setDeleting(true);
    await setTimeout(() => {
      console.log("Deleting all tasks.");
      localStorage.removeItem("names");
      setDeleting(false);
    }, 2000);
  }, []);
  
  if(isLoading || !tasks){
  return <DottedLoader />
  }

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
            AddTask({taskId, taskName});
            setTaskName("");
            setTimeout(() => {
              refetch();
            }, 2000);
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
            disabled={!tasks}
          >
            Delete All
          </button>
        )}
      </div>
      <div className="mx-4 mt-4">
      <span className="ml-5 font-bold font-sans text-3xl text-white tracking-tight">Tasks</span>
      {tasks.map((task) => (
        <Row
          task={task.body}
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
