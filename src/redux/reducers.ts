import Task from "../models/Task";
import { ADD_TASK, AddTaskPayload, IAction, REMOVE_TASK, RemoveTaskPayload, UPDATE_TASK, UpdateTaskPayload } from "./actions";

function tasks<T>(state: Task[] = [], action: IAction<T>) {
    switch (action.type){
        case ADD_TASK:
            const description = (action.payload as unknown as AddTaskPayload).text;
            return [
                ...state,
                new Task(state.length, description, new Date(), 0)
            ];;

        case REMOVE_TASK:
            const removeTaskId = (action.payload as unknown as RemoveTaskPayload).id;
            return state.filter(x => x.id != removeTaskId);    

        case UPDATE_TASK:
            const payload = (action.payload as unknown as UpdateTaskPayload);
            const index = state.findIndex(x => x.id == payload.id);
            const task = state[index];
            const newState = [...state];
            newState[index] = new Task(task.id, payload.description, task.createdAt, payload.status);
            return newState;   

        default: 
            return state;
    }
}

export default function todoApp(state:any = {}, action: any) {
    return {
      tasks: tasks(state.tasks, action)
    }
}