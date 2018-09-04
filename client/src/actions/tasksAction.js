export const loadTasks = (data) => (
    {
        type: "LOAD_TASKS",
        payload: data
    });

export const addTask = (data) => (
    {
        type: "ADD_TASK",
        payload: data
    });

export const deleteTask = (id) => (
    {
        type: "DELETE_TASK",
        id: id
    });

export const editTask = (id,input) => (
    {
        type: "EDIT_TASK",
        id: id,
        input: input,
    });

export const isActive = (num) => ({type: "IS_ACTIVE", id:num,});
