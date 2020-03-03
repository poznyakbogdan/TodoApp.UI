import React from "react";
import ApiService from "../../services/ApiService";

interface ITaskFormProps {
    
}

const TaskForm: React.FC = () => {
    const apiService = new ApiService();
    
    
    return (<div>
        <input type="text" name="task" id="task"/>
        <button onClick={() => {apiService.createTask("new task!")}}>Create</button>
    </div>)
}

export default TaskForm;