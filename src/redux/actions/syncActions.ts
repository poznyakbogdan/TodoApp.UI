
import { ADD_TASK_TO_VIEW, REMOVE_TASK_FROM_VIEW, ADD_TASK, REMOVE_TASK, UPDATE_TASK, ADD_CATEGORY_TO_STORAGE, UPDATE_CATEGORY_IN_STORAGE, ADD_CATEGORY_TO_VIEW, API_REQUEST_STARTED, API_REQUEST_FAILED, API_REQUEST_SUCCESS, ADD_TASKS_TO_STORAGE, ADD_TASKS_TO_VIEW, ADD_CATEGORIES_TO_VIEW, ADD_CATEGORIES_TO_STORAGE, CATEGORIES_API_REQUEST_STARTED, CATEGORIES_API_REQUEST_SUCCESS, CATEGORIES_API_REQUEST_FAILED, TASKS_API_REQUEST_FAILED, TASKS_API_REQUEST_SUCCESS, TASKS_API_REQUEST_STARTED, REMOVE_CATEGORY_FROM_STORAGE, REMOVE_CATEGORY_FROM_VIEW } from "../actionNames"
import Task from "../../models/Task"
import { Action } from "../types"
import { Category } from "../../models/Category"

export const categoriesApiRequestFailed: ActionCreator<null> = () => {
    return {
        type: CATEGORIES_API_REQUEST_FAILED
    }
}

export const categoriesApiRequestSuccess: ActionCreator<null> = () => {
    return {
        type: CATEGORIES_API_REQUEST_SUCCESS
    }
}

export const categoriesApiRequestStart: ActionCreator<null> = () => {
    return {
        type: CATEGORIES_API_REQUEST_STARTED
    }
}

export const tasksApiRequestFailed: ActionCreator<null> = () => {
    return {
        type: TASKS_API_REQUEST_FAILED
    }
}

export const tasksApiRequestSuccess: ActionCreator<null> = () => {
    return {
        type: TASKS_API_REQUEST_SUCCESS
    }
}

export const tasksApiRequestStart: ActionCreator<null> = () => {
    return {
        type: TASKS_API_REQUEST_STARTED
    }
}

export const addCategoriesToView: ActionCreator<number[]> = categoriesIds => {
    return {
        type: ADD_CATEGORIES_TO_VIEW,
        payload: categoriesIds
    }
}

export const removeCategoryFromView: ActionCreator<number> = categoryId => {
    return {
        type: REMOVE_CATEGORY_FROM_VIEW,
        payload: categoryId
    }
}

export const addCategoryToView: ActionCreator<number> = categoryId => {
    return {
        type: ADD_CATEGORY_TO_VIEW,
        payload: categoryId
    }
}

export const updateCategoryInStorage: ActionCreator<Category> = category => {
    return {
        type: UPDATE_CATEGORY_IN_STORAGE,
        payload: category
    }
}

export const addCategoriesToStorage: ActionCreator<Category[]> = categories => {
    return {
        type: ADD_CATEGORIES_TO_STORAGE,
        payload: categories
    }
}

export const removeCategoryFromStorage: ActionCreator<number> = categoryId => {
    return {
        type: REMOVE_CATEGORY_FROM_STORAGE,
        payload: categoryId
    }
}

export const addCategoryToStorage: ActionCreator<Category> = category => {
    return {
        type: ADD_CATEGORY_TO_STORAGE,
        payload: category
    }
}

export const addTasksToView: ActionCreator<number[]> = tasksIds => {
    return {
        type: ADD_TASKS_TO_VIEW,
        payload: tasksIds
    }
}

export const addTaskToView: ActionCreator<number> = taskId => {
    return {
        type: ADD_TASK_TO_VIEW,
        payload: taskId
    }
}

export const removeTaskFromView: ActionCreator<number> = taskId => {
    return {
        type: REMOVE_TASK_FROM_VIEW,
        payload: taskId
    }
}

export const addTasksToStorage: ActionCreator<Task[]> = tasks => {
    return {
        type: ADD_TASKS_TO_STORAGE,
        payload: tasks
    }
}

export const addTaskToStorage: ActionCreator<Task> = task => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const removeTaskFromStorage: ActionCreator<number> = taskId => {
    return {
        type: REMOVE_TASK,
        payload: taskId
    }
}

export const updateTaskInStorage: ActionCreator<Task> = task => {
    return {
        type: UPDATE_TASK,
        payload: task
    }
}

type ActionCreator<T> = (payload?: T) => Action<T>