import Task from "../models/Task";
import ApiService from "../services/ApiService";

let apiService = new ApiService();

export const ADD_TASK = 'AddTask';
export const REMOVE_TASK = 'RemoveTask';
export const UPDATE_TASK = 'UpdateTask';
export const INITIALIZE_TASKS = 'InitializeTasks';

export const TASKS_API_REQUEST = 'TasksApiRequest';
export const TASKS_API_REQUEST_SUCCESS = 'TasksApiSuccess';
export const TASKS_API_REQUEST_FAILED = 'TasksApiFailed';
export const CREATE_TASK_API_REQUEST_SUCCESS = 'CreateTaskApiSuccess';
export const CREATE_TASK_API_REQUEST_FAILED = 'CreateTaskApiFailed';
export const REMOVE_TASK_API_REQUEST_SUCCESS = 'RemoveTaskApiSuccess';
export const REMOVE_TASK_API_REQUEST_FAILED = 'RemoveTaskApiFailed';
export const UPDATE_TASK_API_REQUEST_SUCCESS = 'UpdateTaskApiSucess'; 

export const REMOVE_TASK_FROM_BOARD = 'RemoveTaskFromBoard';
export const ADD_TASK_TO_BOARD = 'AddTaskToBoard';

export const fetchTasks = () => (dispatch: any) => { 
    dispatch(Object.assign({}, tasksApiRequestStart()));
    return apiService.getAllTasks()
        .then(tasks => {
            dispatch(Object.assign({}, initializeTasks({tasks})));
            dispatch(Object.assign({}, tasksApiRequestSuccess({tasks})));
        })
}

export const createTask = (description: string) => (dispatch: any) => { 
    dispatch(Object.assign({}, tasksApiRequestStart()));
    return apiService.createTask(description)
        .then(task => {
            dispatch(Object.assign({}, addTask(task)));
            dispatch(Object.assign({}, addToBoard(task.id)));
            dispatch(Object.assign({}, createTaskApiRequestSuccess({task})));
        })
}

export const removeTaskAsync = (id: number) => (dispatch: any) => { 
    dispatch(Object.assign({}, tasksApiRequestStart()));
    return apiService.removeTask(id)
        .then(() => {
            dispatch(Object.assign({}, removeTask(id)));
            dispatch(Object.assign({}, removeFromBoard(id)));
            dispatch(Object.assign({}, removeTaskApiRequestSuccess(id)));
        })
}

export const updateTaskAsync = (id: number, description: string, status: number) => (dispatch: any) => { 
    dispatch(Object.assign({}, tasksApiRequestStart()));
    return apiService.updateTask(id, description, status)
        .then(task => {
            dispatch(Object.assign({}, updateTask(task)));
            dispatch(Object.assign({}, updateTaskApiRequestSuccess()));
        })
}

export function tasksApiRequestStart(){
    return new Action(TASKS_API_REQUEST);
}

export function updateTaskApiRequestSuccess(){
    return new Action(UPDATE_TASK_API_REQUEST_SUCCESS);
}

export function removeTaskApiRequestSuccess(payload: number){
    return new Action<number>(REMOVE_TASK_API_REQUEST_SUCCESS, payload);
}

export function removeTaskApiRequestFailed(payload: FailedTasksApiRequestPayload){
    return new Action<FailedTasksApiRequestPayload>(REMOVE_TASK_API_REQUEST_FAILED, payload);
}

export function createTaskApiRequestSuccess(payload: SucessCreateTaskApiRequestPayload){
    return new Action<SucessCreateTaskApiRequestPayload>(CREATE_TASK_API_REQUEST_SUCCESS, payload);
}

export function createTaskApiRequestFailed(payload: FailedTasksApiRequestPayload){
    return new Action<FailedTasksApiRequestPayload>(CREATE_TASK_API_REQUEST_FAILED, payload);
}

export function tasksApiRequestSuccess(payload: SucessTasksApiRequestPayload){
    return new Action<SucessTasksApiRequestPayload>(TASKS_API_REQUEST_SUCCESS, payload);
}

export function tasksApiRequestFailed(payload: FailedTasksApiRequestPayload){
    return new Action<FailedTasksApiRequestPayload>(TASKS_API_REQUEST_FAILED, payload);
}

export function initializeTasks(payload: SucessTasksApiRequestPayload) {
    return new Action<SucessTasksApiRequestPayload>(INITIALIZE_TASKS, payload);
}

export function addToBoard(payload: number){
    return new Action<number>(ADD_TASK_TO_BOARD, payload);
}

export function removeFromBoard(payload: number){
    return new Action<number>(REMOVE_TASK_FROM_BOARD, payload);
}

export function addTask(payload: Task){
    return new Action<Task>(ADD_TASK, payload);
}

export function removeTask(payload: number){
    return new Action<number>(REMOVE_TASK, payload);
}

export function updateTask(payload: Task){
    return new Action<Task>(UPDATE_TASK, payload);
}

export interface SucessCreateTaskApiRequestPayload{
    task: Task
}

export interface SucessTasksApiRequestPayload{
    tasks: Task[]
}

export interface FailedTasksApiRequestPayload{
    error: string
}

export interface IAction<T>{
    type: string,
    payload: T
}

export class Action<T> implements IAction<T> {
    type: string;
    payload: T;

    constructor(type: string, payload: T = null) {
        this.type = type;
        this.payload = payload;
    }
}