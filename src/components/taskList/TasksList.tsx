import React, { useEffect } from "react";
import Task from "../../models/Task";
import ApiService from "../../services/ApiService";
import { InputGroup, Button, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { formatDateFromNow } from "../../formats";
import TaskForm from "../taskForm/TaskForm";

interface ITasksListProps {
    tasks: Task[]
}

const TasksList: React.FC<ITasksListProps> = () => {
    const apiService = new ApiService();

    const [tasks, setTasks] = React.useState([]);
    const [updateTaskData, setUpdateTaskData] = React.useState({} as {name: string, description: string, status: number});
    const [createTaskData, setCreateTaskData] = React.useState({} as {name: string, description: string, status: number});

    useEffect(() => {
        apiService.getAllTasks()
            .then(data => setTasks(data.sort((a, b) => dateComparator(b.createdAt, a.createdAt))))
    }, []);

    function dateComparator(a: Date, b: Date): number {
        let eventStartTime = new Date(a);
        let eventEndTime = new Date(b);
        let duration = eventEndTime.valueOf() - eventStartTime.valueOf();
        return duration;
    }

    function handleRemoveTask(id: number) {
        apiService.removeTask(id)
            .then(() => setTasks(tasks.filter(x => x.id != id)));
    }

    function handleUpdateTask(id: number) {
        const updateData = updateTaskData;
        setUpdateTaskData({} as {name: string, description: string, status: number});
        apiService.updateTask(id, updateData.name, updateData.description, updateData.status)
            .then(task => setTasks(tasks.filter(x => x.id != id).concat(task).sort((a, b) => dateComparator(b.createdAt, a.createdAt))));
    }

    function handleCreateTask() {
        const taskData = createTaskData;
        setCreateTaskData({} as {name: string, description: string, status: number});
        apiService.createTask(taskData.description)
            .then(task => setTasks(tasks.concat(task).sort((a, b) => dateComparator(b.createdAt, a.createdAt))));
    }

    return (
        <div>
            <ListGroup as="ul">
                {
                    tasks.map((x, i) => 
                    <ListGroupItem as="li" key={x.id}>
                        <div className="row">
                            <div className="col-lg-1">{i + 1}.</div>
                            <div className="col-lg-3">{x.description}</div>
                            <div className="col-lg-5">
                                <TaskForm taskId={x.id} formData={updateTaskData} setFormData={setUpdateTaskData} handleFormSubmission={handleUpdateTask} />
                            </div>
                            <div className="col-lg-2">{formatDateFromNow(x.createdAt)}</div>
                            <div className="col-lg-1">
                                <Button onClick={() => {handleRemoveTask(x.id)}}>X</Button>
                            </div>
                        </div>
                    </ListGroupItem>)
                }
            </ListGroup>
            <div>
                <TaskForm formData={createTaskData} setFormData={setCreateTaskData} handleFormSubmission={handleCreateTask} />
            </div>
        </div>
    );
}

export default TasksList;