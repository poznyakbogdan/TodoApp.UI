import React from "react";
import TaskItem from "./TaskItem";
import UpdateTaskForm from "../updateTaskForm/UpdateTaskForm";
import RemoveTaskButton from "../removeTask/RemoveTaskButton";
import Task from "../../models/Task";
import "./TasksListItem.scss";
import { ListGroupItem } from "react-bootstrap";

const TasksListItem: React.FC<{task: Task, onRemoveItem: Function}> = (props) => {
    const [isUpdateFormDisplay, setIsUpdateFormDisplay] = React.useState(false);
    return (<div className="row tasks-list-item" onClick={() => {setIsUpdateFormDisplay(true)}}>
        <ListGroupItem as="li" action key={props.task.id}>
            <div className="row">
                {isUpdateFormDisplay ? 
                    <div className="col-lg-12 update-task-block">
                        <UpdateTaskForm taskId={props.task.id} afterUpdate={() => setIsUpdateFormDisplay(false)}/>
                    </div> :
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-11">
                                <TaskItem task={props.task} />
                            </div>
                            <div className="col-lg-1 remove-task-block">
                                <RemoveTaskButton taskId={props.task.id} onClick={props.onRemoveItem} />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </ListGroupItem>
    </div>)
}

export default TasksListItem;