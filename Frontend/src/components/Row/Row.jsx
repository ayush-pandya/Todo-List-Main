import React, { useCallback, useState } from "react";
import { EditTaskModal } from "./EditTaskModal";
export function Row({ task, deleteTask, id, className }) {
  let taskName = task;
  const [modalopen, setModalOpen] = useState(false);

  return (
    <div className={`flex justify-between items-center ${className}`}>
      <p className="p-2 w-[90%]">{taskName}</p>
      <div>
        <EditTaskModal
          onClickElement={
            <button
              className="bg-slate-500 rounded-lg m-2 p-2"
              onClick={() => setModalOpen(!modalopen)}
            >
              Edit
            </button>
          }
          visibility={modalopen}
          taskId={id}
        />
        <button
          className="bg-slate-500 rounded-lg m-2 p-2"
          onClick={deleteTask}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
