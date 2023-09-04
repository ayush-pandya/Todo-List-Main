export const useAddTask = () => {
    // let tasks = [];
    async function AddTask(params) {
        fetch('http://localhost:4000/add', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ body: params.taskName })
          })
      }
    // if (localStorage.names) tasks = [...JSON.parse(localStorage.names), ...tasks];
    
    // const addTask = (taskId, taskName) => {
    //     tasks.push({ task: taskName, id: taskId });
    //     localStorage.names = JSON.stringify(tasks);
    // }
    return { AddTask }
  };