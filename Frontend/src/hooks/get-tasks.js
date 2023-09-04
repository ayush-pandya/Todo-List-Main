import useApi from '../components/DataLayer/useApi'

export const useGetTasks = () => {
    // let tasks = [];
    // if (localStorage.names) tasks = [...JSON.parse(localStorage.names), ...tasks];
    const {data, loading, refetch} = useApi('http://localhost:4000/')
    // const rData= JSON.stringify(data)
    return {data, isLoading: loading, refetch};
}