import React from "react";
import Task from "../../models/Task";
import TaskItem from "../taskItem/TaskItem";
import UpdateTaskForm from "../updateTaskForm/UpdateTaskForm";
import RemoveTaskButton from "../removeTask/RemoveTaskButton";

export interface ITaskListProps {
    tasks: Task[],
    isLoading: boolean,
    initialize: Function,
    onRemoveItem: Function
}

export const TasksList: React.FC<ITaskListProps> = (props) => {
    
    React.useEffect(() => {
        props.initialize();
    }, [])

    return props.isLoading ? <span>Loading...</span> : (
        <div className="container">
            <h3>Tasks List</h3>
            <div className="container">
                {
                    props.tasks.map(task => <div key={task.id}>
                        <TaskItem task={task} />
                        <UpdateTaskForm taskId={task.id} />
                        <RemoveTaskButton taskId={task.id} onClick={props.onRemoveItem} />
                    </div>)
                }
            </div>
        </div>
    );
}