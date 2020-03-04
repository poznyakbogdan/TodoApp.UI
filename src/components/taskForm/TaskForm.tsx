import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

interface ITaskFormProps {
    taskId?: number,
    formData: {description: string},
    setFormData: Function,
    handleFormSubmission: Function,
}

const TaskForm: React.FC<ITaskFormProps> = (props) => {
    let textInput = React.createRef();

    return (
    <InputGroup className="mb-3">
        <FormControl aria-describedby="basic-addon1" type="text" ref={textInput as React.RefObject<any>} name={`task_description_${props.taskId}`} id={`task_name_${props.taskId}`} onChange={(e:any) => {
          
            props.setFormData({
                description: e.target.value
            })
        }} />
        <Button onClick={() => {
            (textInput.current as HTMLInputElement).value = "";
            props.handleFormSubmission(props.taskId)
        }}>V</Button>
    </InputGroup>)
}

export default TaskForm;