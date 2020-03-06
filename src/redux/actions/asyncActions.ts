import ApiService from "../../services/ApiService";
import { tasksApiRequestStart, initializeTasks, tasksApiRequestSuccess, addTask, addToBoard, createTaskApiRequestSuccess, removeTask, removeFromBoard, removeTaskApiRequestSuccess, updateTask, updateTaskApiRequestSuccess } from "./syncActions";

let apiService = new ApiService();

export const fetchTasksAsync = () => (dispatch: any) => { 
    dispatch(tasksApiRequestStart());
    return apiService.getAllTasks()
        .then(tasks => {
            dispatch(initializeTasks({tasks}));
            dispatch(tasksApiRequestSuccess({tasks}));
        })
}

export const createTaskAsync = (description: string) => (dispatch: any) => { 
    dispatch(tasksApiRequestStart());
    return apiService.createTask(description)
        .then(task => {
            dispatch(addTask(task));
            dispatch(addToBoard(task.id));
            dispatch(createTaskApiRequestSuccess({task}));
        })
}

export const removeTaskAsync = (id: number) => (dispatch: any) => { 
    dispatch(tasksApiRequestStart());
    return apiService.removeTask(id)
        .then(() => {
            dispatch(removeTask(id));
            dispatch(removeFromBoard(id));
            dispatch(removeTaskApiRequestSuccess(id));
        })
}

export const updateTaskAsync = (id: number, description: string, status: number) => (dispatch: any) => { 
    dispatch(tasksApiRequestStart());
    return apiService.updateTask(id, description, status)
        .then(task => {
            dispatch(updateTask(task));
            dispatch(updateTaskApiRequestSuccess());
        })
}