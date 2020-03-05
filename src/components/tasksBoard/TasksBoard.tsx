import React from "react";
import TasksView from "./TasksView";
import CreateTaskForm from "../createTaskForm/CreateTaskForm";

const TasksBoard: React.FC = () => {    
    return (
        <div className="container">
            <TasksView />
            <CreateTaskForm />
        </div>
    );
}

export default TasksBoard;