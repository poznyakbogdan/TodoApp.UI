import React from "react";
import { InputGroup, FormControl, DropdownButton, Dropdown } from "react-bootstrap";
import { updateTaskAsync } from "../../redux/actions";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

const UpdateTaskForm: React.FC<{taskId: number, onSubmit: Function}> = (props) => {
    const [description, setDescription] = React.useState("");
    const [status, setStatus] = React.useState(0);
    
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
                <Button onClick={() => props.onSubmit(props.taskId, description, status)} variant="outline-secondary">Update</Button>
            </InputGroup>
        </>
    );
}

function mapStateToProps(state: any) {
    return {};
}

function mapDispatchToProps(dispatch: any) {
    return {
        onSubmit: (id: number, description: string, status: number) => {
            dispatch(updateTaskAsync(id, description, status))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTaskForm);