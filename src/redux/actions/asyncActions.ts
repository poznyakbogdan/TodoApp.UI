import ApiService from "../../services/ApiService";
import { addTaskToStorage, addTaskToView, removeTaskFromStorage, removeTaskFromView, updateTaskInStorage, addCategoryToStorage, addCategoryToView, addTasksToStorage, addTasksToView, addCategoriesToStorage, addCategoriesToView, categoriesApiRequestStart, categoriesApiRequestSuccess, tasksApiRequestStart, tasksApiRequestSuccess, updateCategoryInStorage, removeCategoryFromView, removeCategoryFromStorage } from "./syncActions";

let apiService = new ApiService();

export const fetchCategoriesAsync = () => (dispatch: any) => { 
    dispatch(categoriesApiRequestStart());
    return apiService.getAllCategories()
        .then(categories => {
            dispatch(addCategoriesToStorage(categories));
            dispatch(addCategoriesToView(categories.map(x => x.id)));
            dispatch(categoriesApiRequestSuccess());
        });
}

export const removeCategoryAsync = (id: number) => (dispatch: any) => { 
    dispatch(categoriesApiRequestStart());
    return apiService.removeCategory(id)
        .then(() => {
            dispatch(removeCategoryFromView(id));
            dispatch(removeCategoryFromStorage(id));
            dispatch(categoriesApiRequestSuccess());
        })
}

export const updateCategoryAsync = (id: number, name: string) => (dispatch: any) => { 
    dispatch(categoriesApiRequestStart());
    return apiService.updateCategory(id, name)
        .then(category => {
            dispatch(updateCategoryInStorage(category));
            dispatch(categoriesApiRequestSuccess());
        })
}

export const createCategoryAsync = (name: string) => (dispatch: any) => { 
    dispatch(categoriesApiRequestStart());
    return apiService.createCategory(name)
    .then(category => {
        dispatch(addCategoryToStorage(category));
        dispatch(addCategoryToView(category.id));
        dispatch(categoriesApiRequestSuccess());
    })
}

export const fetchTasksAsync = () => (dispatch: any) => { 
    dispatch(tasksApiRequestStart());
    return apiService.getAllTasks()
        .then(tasks => {
            dispatch(addTasksToStorage(tasks));
            dispatch(addTasksToView(tasks.map(x => x.id)))
            dispatch(tasksApiRequestSuccess());
        })
}

export const createTaskAsync = (description: string, categoryId: number) => (dispatch: any) => { 
    dispatch(tasksApiRequestStart());
    return apiService.createTask(description, categoryId)
        .then(task => {
            dispatch(addTaskToStorage(task));
            dispatch(addTaskToView(task.id));
            dispatch(tasksApiRequestSuccess());
        })
}

export const removeTaskAsync = (id: number) => (dispatch: any) => { 
    dispatch(tasksApiRequestStart());
    return apiService.removeTask(id)
        .then(() => {
            dispatch(removeTaskFromView(id));
            dispatch(removeTaskFromStorage(id));
            dispatch(tasksApiRequestSuccess());
        })
}

export const updateTaskAsync = (id: number, description: string, status: number, categoryId: number) => (dispatch: any) => { 
    dispatch(tasksApiRequestStart());
    return apiService.updateTask(id, description, status, categoryId)
        .then(task => {
            dispatch(updateTaskInStorage(task));
            dispatch(tasksApiRequestSuccess());
        })
}