export const useGetTasks = () => {
    let tasks = [];
    if (localStorage.names) tasks = [...JSON.parse(localStorage.names), ...tasks];
    return tasks;
}