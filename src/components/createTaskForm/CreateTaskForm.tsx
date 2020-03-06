import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { createTaskAsync } from "../../redux/actions/asyncActions";

let CreateTaskForm: React.FC<{onSubmit: Function}> = (props) => {
    const [description, setDescription] = React.useState("");
    
    return (
        <div className="container">
            <InputGroup className="row mb-3">
                <FormControl className="col-lg-9" aria-describedby="basic-addon1" placeholder="Task description..." type="text" name="task_description" id="task_description" onChange={(e:any) => {
                    setDescription(e.target.value)
                } } />
                <Button className="col-lg-3" block onClick={() => props.onSubmit(description)}>Add</Button>
            </InputGroup>
        </div>
    );
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch: any) {
    return {
        onSubmit: (description: string) => {
            dispatch(createTaskAsync(description))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskForm);