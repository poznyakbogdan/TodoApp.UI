import Task from "../models/Task";

export default interface IStateModel {
    entities: {
        tasks: Task[]
    },
    board: {
        isFetching: boolean,
        items: number[]
    }
}