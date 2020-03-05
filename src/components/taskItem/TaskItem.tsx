import React from "react";
import Task from "../../models/Task";
import { formatDateFromNow } from "../../formats";

interface ITaskItemProps{
    task: Task
}

const TaskItem: React.FC<ITaskItemProps> = (props) => {
    return (
        <div className="row">
            <div className="col-lg-6">
                {props.task.description}
            </div>
            <div className="col-lg-3">
                {props.task.status}
            </div>
            <div className="col-lg-3">
                {formatDateFromNow(props.task.createdAt)}
            </div>
        </div>
    );
}

export default TaskItem;