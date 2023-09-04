import React, { useCallback, useState } from "react";
import {useGetTasks} from '../../hooks/get-tasks'
import { useEditTask } from "../../hooks/edit-task";

export const EditTaskModal = ({ taskId, onClickElement, visibility }) => {
  const tasks = useGetTasks();
  const currentTask = tasks.filter((task) => task.id === taskId);
  const [taskName, setTaskName] = useState(currentTask[0]?.task);
  const {editTask} = useEditTask();

  return (
    <>
      {onClickElement}
      <div
        style={{ visibility: !visibility ? "hidden" : "visible" }}
        className="z-10 bg-slate-500 opacity-80 absolute left-0 top-0 h-full w-full flex items-center justify-center"
      >

            <form className="opacity-100 bg-white" onSubmit={()=> {
              console.log("Editing task.");
              editTask(taskId, taskName)
            }}>
                <label className="m-2">Task Name:</label>
                <input type="text" id="tname" name="tname" className="w-3/5 rounded p-2" value={taskName} onChange={(e)=> setTaskName(e.target.value)}/>
                <input type="submit" value="Submit" className="rounded-lg p-3 w-1/4"/>
            </form>
        </div>
    </>
  );
};
