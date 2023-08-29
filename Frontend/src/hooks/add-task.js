export const useAddTask = () => {
    let tasks = [];
    
    if (localStorage.names) tasks = [...JSON.parse(localStorage.names), ...tasks];
    
    const addTask = (taskId, taskName) => {
        tasks.push({ task: taskName, id: taskId });
        localStorage.names = JSON.stringify(tasks);
    }
    return { addTask }
  };