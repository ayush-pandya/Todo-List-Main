import { useCallback } from "react";
import { useGetTasks } from "./get-tasks";
export const useEditTask = () => {
    let tasks = useGetTasks();
    const editTask = useCallback((taskId, taskName) => {
        console.log("dksjhgkjasdgh",taskId)
        let currentTask = tasks.filter((task) => task.id === taskId);
        currentTask[0].task = taskName;
        localStorage.names = JSON.stringify(tasks);
    }, [tasks]);

    return { editTask }
};