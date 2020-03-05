import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { createTask } from "../../redux/actions";
import { connect } from "react-redux";

let CreateTaskForm: React.FC<{onSubmit: Function}> = (props) => {
    const [description, setDescription] = React.useState("");
    
    return (
        <InputGroup className="mb-3">
            <FormControl aria-describedby="basic-addon1" type="text" name="task_description" id="task_description" onChange={(e:any) => {
                setDescription(e.target.value)
            } } />
            <Button onClick={() => props.onSubmit(description)}>V</Button>
        </InputGroup>
    );
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch: any) {
    return {
        onSubmit: (description: string) => {
            dispatch(createTask(description))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskForm);