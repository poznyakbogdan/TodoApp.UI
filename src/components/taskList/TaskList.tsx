import React from "react";
import Task from "../../models/Task";
import TaskItem from "../taskItem/TaskItem";
import UpdateTaskForm from "../updateTaskForm/UpdateTaskForm";
import RemoveTaskButton from "../removeTask/RemoveTaskButton";

export interface ITaskListProps {
    tasks: Task[]
}

export const TasksList: React.FC<ITaskListProps> = (props) => {
    return (
        <div className="container">
            <h3>Tasks List</h3>
            <div className="container">
                {
                    props.tasks.map(task => <>
                        <TaskItem task={task} />
                        <UpdateTaskForm taskId={task.id} />
                        <RemoveTaskButton taskId={task.id} />
                    </>)
                }
            </div>
        </div>
    );
}