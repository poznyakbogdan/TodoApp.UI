import Task from "../models/Task"
import { Category } from "../models/Category"

export type SucessCreateTaskApiRequestPayload = {
    task: Task
}

export type SucessTasksApiRequestPayload = {
    tasks: Task[]
}

export type FailedTasksApiRequestPayload = {
    error: string
}

export type Action<T> = {
    type: string,
    payload?: T
}

export default interface IStateModel {
    entities: {
        tasks: Task[],
        categories: Category[]
    },
    board: {
        isTasksFetching: boolean,
        isCategoriesFetching: boolean,
        items: {
            tasks: number[],
            categories: number[]
        }
    }
}