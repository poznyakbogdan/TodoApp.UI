import React from "react";
import CreateTaskForm from "../createTaskForm/CreateTaskForm";
import "./TasksBoard.scss";
import TasksList from "../taskList/TaskList";

const TasksBoard: React.FC = () => {    
    return (
        <div className="container tasks-board">
            <div className="row">
                <CreateTaskForm />
            </div>
            <div className="row">
                <TasksList />
            </div>
        </div>
    );
}

export default TasksBoard;