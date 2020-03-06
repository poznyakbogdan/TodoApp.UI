import Task from "../models/Task"

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
        tasks: Task[]
    },
    board: {
        isFetching: boolean,
        items: number[]
    }
}