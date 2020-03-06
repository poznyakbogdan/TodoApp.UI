
import { TASKS_API_REQUEST, UPDATE_TASK_API_REQUEST_SUCCESS, REMOVE_TASK_API_REQUEST_SUCCESS, REMOVE_TASK_API_REQUEST_FAILED, CREATE_TASK_API_REQUEST_SUCCESS, CREATE_TASK_API_REQUEST_FAILED, TASKS_API_REQUEST_SUCCESS, TASKS_API_REQUEST_FAILED, INITIALIZE_TASKS, ADD_TASK_TO_BOARD, REMOVE_TASK_FROM_BOARD, ADD_TASK, REMOVE_TASK, UPDATE_TASK } from "../actionNames"
import Task from "../../models/Task"
import { Action, FailedTasksApiRequestPayload, SucessCreateTaskApiRequestPayload, SucessTasksApiRequestPayload } from "../types"

export const tasksApiRequestStart: ActionCreator<null> = () => {
    return {
        type: TASKS_API_REQUEST
    }
}

export const updateTaskApiRequestSuccess: ActionCreator<null> = () => {
    return {
        type: UPDATE_TASK_API_REQUEST_SUCCESS
    }
}

export const removeTaskApiRequestSuccess: ActionCreator<number> = taskId => {
    return {
        type: REMOVE_TASK_API_REQUEST_SUCCESS,
        payload: taskId
    }
}

export const removeTaskApiRequestFailed: ActionCreator<FailedTasksApiRequestPayload> = payload => {
    return {
        type: REMOVE_TASK_API_REQUEST_FAILED,
        payload
    }
}

export const createTaskApiRequestSuccess: ActionCreator<SucessCreateTaskApiRequestPayload> = payload => {
    return {
        type: CREATE_TASK_API_REQUEST_SUCCESS,
        payload
    }
}

export const createTaskApiRequestFailed: ActionCreator<FailedTasksApiRequestPayload> = payload => {
    return {
        type: CREATE_TASK_API_REQUEST_FAILED,
        payload
    }
}

export const tasksApiRequestSuccess: ActionCreator<SucessTasksApiRequestPayload> = payload => {
    return {
        type: TASKS_API_REQUEST_SUCCESS,
        payload
    }
}

export const tasksApiRequestFailed: ActionCreator<FailedTasksApiRequestPayload> = payload => {
    return {
        type: TASKS_API_REQUEST_FAILED,
        payload
    }
}

export const initializeTasks: ActionCreator<SucessTasksApiRequestPayload> = payload => {
    return {
        type: INITIALIZE_TASKS,
        payload
    }
}

export const addToBoard: ActionCreator<number> = taskId => {
    return {
        type: ADD_TASK_TO_BOARD,
        payload: taskId
    }
}

export const removeFromBoard: ActionCreator<number> = taskId => {
    return {
        type: REMOVE_TASK_FROM_BOARD,
        payload: taskId
    }
}

export const addTask: ActionCreator<Task> = task => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const removeTask: ActionCreator<number> = taskId => {
    return {
        type: REMOVE_TASK,
        payload: taskId
    }
}

export const updateTask: ActionCreator<Task> = task => {
    return {
        type: UPDATE_TASK,
        payload: task
    }
}

type ActionCreator<T> = (payload?: T) => Action<T>