import React, { useEffect } from "react";
import TaskForm from "../taskForm/TaskForm";
import TasksList from "../taskList/TasksList";
import ApiService from "../../services/ApiService";
import Task from "../../models/Task";

const Editor: React.FC = () => {
    const apiService = new ApiService();
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        apiService.getAllTasks().then(tasks => {
            setItems(tasks);
        });
    }, [])
    
    return (
        <div>
            <TaskForm />
            <TasksList tasks={items} />
        </div>
    );
}

export default Editor;