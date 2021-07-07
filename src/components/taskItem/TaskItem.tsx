import React from "react";
import Task from "../../models/Task";
import { formatDateFromNow, formatStatus, getBadgeType } from "../../formats";
import { Badge } from "react-bootstrap";

interface ITaskItemProps{
    task: Task
}

const TaskItem: React.FC<ITaskItemProps> = (props) => {
    let badge = getBadgeType(props.task.status);
    return (
        <div className="row">
            <div className="col-lg-8">
                {props.task.description}
            </div>
            <div className="col-lg-2">
                <Badge variant={badge} >
                    {formatStatus(props.task.status)}
                </Badge>
            </div>
            <div className="col-lg-2">
                {formatDateFromNow(props.task.createdAt)}
            </div>
        </div>
    );
}

export default TaskItem;