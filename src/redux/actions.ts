export const ADD_TASK = 'AddTask';
export const REMOVE_TASK = 'RemoveTask';
export const UPDATE_TASK = 'UpdateTask';

export function addTask(payload: AddTaskPayload){
    return new Action<AddTaskPayload>(ADD_TASK, payload);
}

export function removeTask(payload: RemoveTaskPayload){
    return new Action<RemoveTaskPayload>(REMOVE_TASK, payload);
}

export function updateTask(payload: UpdateTaskPayload){
    return new Action<UpdateTaskPayload>(UPDATE_TASK, payload);
}

export interface AddTaskPayload {
    text: string
}

export interface RemoveTaskPayload {
    id: number
}

export interface UpdateTaskPayload {
    id: number,
    status: number,
    description: string
}

export interface IAction<T>{
    type: string,
    payload: T
}

export class Action<T> implements IAction<T> {
    type: string;
    payload: T;

    constructor(type: string, payload: T) {
        this.type = type;
        this.payload = payload;
    }
}