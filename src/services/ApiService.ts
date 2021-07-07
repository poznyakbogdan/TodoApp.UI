import Axios, { AxiosInstance } from "axios";
import Task from "../models/Task";
import { Category } from "../models/Category";

class ApiService {
    instance: AxiosInstance;
    
    constructor(){
        this.instance = Axios.create({
            baseURL: "https://localhost:5001/"
        });
    }

    public async getAllCategories(): Promise<Category[]> {
        let response = await this.instance.get("/categories");
        return response.data;
    }

    public async removeCategory(id: number) {
        let response = await this.instance.delete(`/categories/${id}`);
        return response.data;
    }

    public async updateCategory(id: number, name: string): Promise<Category> {
        let response = await this.instance.put(`/categories/${id}`, {name});
        return response.data;
    }

    public async createCategory(name: string): Promise<Category> {
        let response = await this.instance.post("/categories", {name});
        return response.data;
    }

    public async getAllTasks(): Promise<Task[]> {
        let apiResponse = await this.instance.get("/tasks");
        return apiResponse.data;
    }

    public async createTask(description: string, categoryId: number = null): Promise<Task> {
        let response = await this.instance.post("/tasks", {description, categoryId});
        return response.data;
    }

    public async removeTask(id: number) {
        let response = await this.instance.delete(`/tasks/${id}`);
        return response.data;
    }

    public async updateTask(id: number, description: string = "", status: number = null, categoryId: number = null) {
        let response = await this.instance.put(`/tasks/${id}`, {
            name,
            description,
            status,
            categoryId
        });
        return response.data;
    }
}

export default ApiService;