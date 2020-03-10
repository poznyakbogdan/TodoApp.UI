import Task from "../models/Task";
import { ADD_TASKS_TO_STORAGE, ADD_TASK, REMOVE_TASK, UPDATE_TASK, TASKS_API_REQUEST_SUCCESS, TASKS_API_REQUEST_FAILED, ADD_TASKS_TO_VIEW, ADD_TASK_TO_VIEW, REMOVE_TASK_FROM_VIEW, TASKS_API_REQUEST_STARTED, CATEGORIES_API_REQUEST_STARTED, CATEGORIES_API_REQUEST_SUCCESS, CATEGORIES_API_REQUEST_FAILED, ADD_CATEGORIES_TO_STORAGE, ADD_CATEGORY_TO_STORAGE, UPDATE_CATEGORY_IN_STORAGE, ADD_CATEGORIES_TO_VIEW, ADD_CATEGORY_TO_VIEW } from "./actionNames";
import IStateModel, { Action } from "./types";
import { Category } from "../models/Category";

function tasksStorage<T>(state: Task[] = [], action: Action<T>) {
    switch (action.type){
        case ADD_TASKS_TO_STORAGE:
            const tasks = (action.payload as unknown as Task[]);
            return [...tasks];

        case ADD_TASK:
            const createdTask = (action.payload as unknown as Task);
            return [
                ...state,
                createdTask
            ];

        case REMOVE_TASK:
            const removeTaskId = (action.payload as unknown as number);
            return state.filter(x => x.id != removeTaskId);    

        case UPDATE_TASK:
            const updatedTask = (action.payload as unknown as Task);
            const index = state.findIndex(x => x.id == updatedTask.id);
            const newState = [...state];
            newState[index] = updatedTask;
            return newState;   

        default: 
            return state;
    }
}

function tasksView<T>(state: number[] = [], action: Action<T>) {
    switch (action.type) {
        case ADD_TASKS_TO_VIEW:
            return action.payload as unknown as number[];
        case ADD_TASK_TO_VIEW:
            return [
                ...state,
                (action.payload as unknown as number)
            ];
        case REMOVE_TASK_FROM_VIEW:
            const removedId = (action.payload as unknown as number);
            return state.filter(x => x != removedId);
        default:
            return state;
    }
}

function categoriesView<T>(state: number[] = [], action: Action<T>) {
    switch (action.type) {
        case ADD_CATEGORIES_TO_VIEW:
            return action.payload as unknown as number[];
        case ADD_CATEGORY_TO_VIEW:
            return [
                ...state,
                (action.payload as unknown as number)
            ];
        default:
            return state;
    }
}

function categories<T>(state: Category[] = [], action: Action<T>) {
    switch (action.type) {
        case ADD_CATEGORIES_TO_STORAGE:
            return [...(action.payload as unknown as Category[])];
        
        case ADD_CATEGORY_TO_STORAGE:
            return [
                ...state,
                (action.payload as unknown as Category)
            ];

        case UPDATE_CATEGORY_IN_STORAGE:
            const updatedCategory = (action.payload as unknown as Category);
            const index = state.findIndex(x => x.id == updatedCategory.id);
            const newState = [...state];
            newState[index] = updatedCategory;
            return newState;   
    
        default:
            return state;
    }
}

function isTasksFetching<T>(state: boolean = false, action: Action<T>) {
    switch (action.type) {
        case TASKS_API_REQUEST_STARTED:
            return true;
        case TASKS_API_REQUEST_SUCCESS:
        case TASKS_API_REQUEST_FAILED:
                return false;
        default:
            return false;
    }
}

function isCategoriesFetching<T>(state: boolean = false, action: Action<T>) {
    switch (action.type) {
        case CATEGORIES_API_REQUEST_STARTED:
            return true;
        case CATEGORIES_API_REQUEST_SUCCESS:
        case CATEGORIES_API_REQUEST_FAILED:
                return false;
        default:
            return false;
    }
}

const DAFAULT_STATE: IStateModel = {
    entities: {
        tasks: [],
        categories: [] 
    },
    board: {
        isTasksFetching: false,
        isCategoriesFetching: false,
        items: {
            tasks: [],
            categories: []
        }
    }
}

export default function todoApp(state: IStateModel = DAFAULT_STATE, action: any) {
    return {
        entities: {
            tasks: tasksStorage(state.entities.tasks, action),
            categories: categories(state.entities.categories, action)
        },
        board: {
            isTasksFetching: isTasksFetching(state.board.isTasksFetching, action),
            isCategoriesFetching: isCategoriesFetching(state.board.isCategoriesFetching, action),
            items: {
                tasks: tasksView(state.board.items.tasks, action),
                categories: categoriesView(state.board.items.categories, action)
            }
        }
    } as IStateModel
}