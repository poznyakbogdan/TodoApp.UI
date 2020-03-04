import Task from "../models/Task";
import { ADD_TASK, REMOVE_TASK, UPDATE_TASK, AddTaskPayload, RemoveTaskPayload, UpdateTaskPayload, IAction } from "./actions";

class TaskModel{
    id: number;
    text: string;

    constructor(text: string){
        this.text = text;
    }
}

function tasks<T>(state: TaskModel[] = [], action: IAction<T>) {
    switch (action.type){
        case ADD_TASK:
            return [
                ...state,
                new TaskModel((action.payload as unknown as AddTaskPayload).text)
            ]
        case REMOVE_TASK:
            return state.filter(x => x.id != (action.payload as unknown as RemoveTaskPayload).id);
        case UPDATE_TASK:
            let payload = (action.payload as unknown as UpdateTaskPayload);
            let index = state.findIndex(x => x.id == payload.id);
            let newTask = new TaskModel(state[index].text);
            newTask.id = state[index].id;
            state[index] = newTask;
            return state;
        default: 
            return state;
    }
}

export default function todoApp(state:any = {}, action: any) {
    return {
      tasks: tasks(state.todos, action)
    }
}