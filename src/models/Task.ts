import Status from "./Status";


export default class Task {
    id: number;
    description: string;
    createdAt: Date;
    status: Status;

    constructor (id: number, description: string, createdAt: Date, status: number){
        this.id = id;
        this.description = description;
        this.createdAt = createdAt;
        this.status = status;
    }
}