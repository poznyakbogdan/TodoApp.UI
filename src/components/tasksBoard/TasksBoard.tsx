import React from "react";
import IStateModel from "../../redux/stateModel";
import store from "../../redux/store";
import CreateTaskForm from "../createTaskForm/CreateTaskForm";
import TasksView from "./TasksView";

const TasksBoard: React.FC = () => {    
    return (
        <div className="container">
            <TasksView />
            <CreateTaskForm />
        </div>
    );
}

export default TasksBoard;