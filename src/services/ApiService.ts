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

    public async createTask(description: string): Promise<Task> {
        let response = await this.instance.post("/tasks", {description});
        return response.data;
    }

    public async removeTask(id: number) {
        let response = await this.instance.delete(`/tasks/${id}`);
        return response.data;
    }

    public async updateTask(id: number, description: string = "", status: number = null) {
        let response = await this.instance.put(`/tasks/${id}`, {
            name,
            description,
            status
        });
        return response.data;
    }
}

export default ApiService;