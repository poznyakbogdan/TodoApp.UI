import Task from "../models/Task";
import { ADD_TASK, IAction, REMOVE_TASK, UPDATE_TASK, TASKS_API_REQUEST, TASKS_API_REQUEST_SUCCESS, SucessTasksApiRequestPayload, INITIALIZE_TASKS, TASKS_API_REQUEST_FAILED, CREATE_TASK_API_REQUEST_FAILED, CREATE_TASK_API_REQUEST_SUCCESS, SucessCreateTaskApiRequestPayload, REMOVE_TASK_API_REQUEST_SUCCESS, updateTask, UPDATE_TASK_API_REQUEST_SUCCESS } from "./actions";

function tasks<T>(state: Task[] = [], action: IAction<T>) {
    switch (action.type){
        case INITIALIZE_TASKS:
            const tasks = (action.payload as unknown as SucessTasksApiRequestPayload).tasks;
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

function board<T>(state: any = {isFetching: false, items: []}, action: IAction<T>) {
    switch (action.type){
        case TASKS_API_REQUEST:
            return {
                isFetching: true,
                items: state.items
            }
        
        case TASKS_API_REQUEST_SUCCESS:
            const tasks = (action.payload as unknown as SucessTasksApiRequestPayload).tasks;
            return {
                isFetching: false,
                items: tasks.map(x => x.id)
            }

        case TASKS_API_REQUEST_FAILED:
            return {
                isFetching: false,
                items: [] as Task[]
            }

        case CREATE_TASK_API_REQUEST_SUCCESS:
            const taskId = (action.payload as unknown as SucessCreateTaskApiRequestPayload).task.id;
            return {
                isFetching: false,
                items: [
                    ...state.items,
                    taskId
                ]
            }

        case REMOVE_TASK_API_REQUEST_SUCCESS:
            const removedTaskId = (action.payload as unknown as number);
            return {
                isFetching: false,
                items: state.items.filter((x: number) => x != removedTaskId)
            }

        case UPDATE_TASK_API_REQUEST_SUCCESS:
            return {
                isFetching: false,
                items: state.items
            }

        default:
            return state;
    }
}

export default function todoApp(state:any = {entities: {}}, action: any) {
    return {
        entities: {
            tasks: tasks(state.entities.tasks, action)
        },
        board: board(state.board, action)
    }
}