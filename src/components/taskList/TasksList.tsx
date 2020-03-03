import React from "react";
import Task from "../../models/Task";

interface ITasksListProps {
    tasks: Task[]
}

const TasksList: React.FC<ITasksListProps> = (props) => {
    return (
        <div>
            {
                props.tasks.map(x => <div>
                    <span>Id: {x.id}</span>
                    <span>Name: {x.name}</span>
                    <span>Description: {x.description}</span>
                    <span>Created at: {x.createdAt}</span>
                </div>)
            }
        </div>
    );
}

export default TasksList;