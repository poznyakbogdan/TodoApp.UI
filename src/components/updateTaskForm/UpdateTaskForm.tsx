import React from "react";
import store from "../../redux/store";
import { InputGroup, FormControl, DropdownButton, Dropdown } from "react-bootstrap";
import { updateTask } from "../../redux/actions";
import { Button } from "react-bootstrap";

const UpdateTaskForm: React.FC<{taskId: number}> = (props) => {
    const [description, setDescription] = React.useState("");
    const [status, setStatus] = React.useState(0);
    

    function onSubmit(){

        store.dispatch(Object.assign({}, updateTask({id: props.taskId, description, status})));
    }

    return (
        <>
            <InputGroup className="mb-3">
                <FormControl 
                    aria-describedby="basic-addon1" 
                    type="text" 
                    name={`task_description_${props.taskId}`} 
                    id={`task_description_${props.taskId}`} 
                    onChange={(e:any) => setDescription(e.target.value) } />
                <DropdownButton
                    as={InputGroup.Prepend}
                    variant="outline-secondary"
                    title="Status"
                    id="input-group-dropdown-1">
                    <Dropdown.Item href="#" onClick={() => setStatus(0)}>Not started</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => setStatus(1)}>In progress</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={() => setStatus(2)}>Done</Dropdown.Item>
                </DropdownButton>
                <Button onClick={onSubmit} variant="outline-secondary">Update</Button>
            </InputGroup>
        </>
    );
}

export default UpdateTaskForm;