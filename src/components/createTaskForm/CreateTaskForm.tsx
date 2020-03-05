import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import store from "../../redux/store";
import { addTask, AddTaskPayload } from "../../redux/actions";

const CreateTaskForm: React.FC = () => {
    const [description, setDescription] = React.useState("");
    
    function onSubmit() {
        const payload = {
            text: description
        } as AddTaskPayload;
        store.dispatch(Object.assign({}, addTask(payload)));
    }

    return (
        <InputGroup className="mb-3">
            <FormControl aria-describedby="basic-addon1" type="text" name="task_description" id="task_description" onChange={(e:any) => {
                setDescription(e.target.value)
            } } />
            <Button onClick={onSubmit}>V</Button>
        </InputGroup>
    );
}

export default CreateTaskForm;