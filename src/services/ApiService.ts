import Axios, { AxiosInstance } from "axios";
import Task from "../models/Task";

class ApiService {
    instance: AxiosInstance;
    
    constructor(){
        this.instance = Axios.create({
            baseURL: "https://localhost:5001/"
        });
    }

    public async getAllTasks(): Promise<Task[]> {
        let apiResponse = await this.instance.get("/tasks");
        return apiResponse.data;
    }

    public async createTask(name: string): Promise<Task> {
        let response = await this.instance.post("/tasks", {name: name});
        return response.data;
    }
}

export default ApiService;