import React from "react";
import { InputGroup, FormControl, DropdownButton, Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { updateTaskAsync } from "../../redux/actions/asyncActions";
import Status from "../../models/Status";
import { formatStatus } from "../../formats";
import store from "../../redux/store";
import IStateModel from "../../redux/types";
import CategoryPicker from "../categoryPicker/CategoryPicker";

const UpdateTaskForm: React.FC<{taskId: number, onSubmit: Function, afterUpdate: Function}> = (props) => {
    let task = (store.getState() as IStateModel).entities.tasks.find(x => x.id == props.taskId);

    const [description, setDescription] = React.useState(task.description);
    const [status, setStatus] = React.useState(task.status);
    const [categoryId, setCategoryId] = React.useState(task.categoryId);

    return (
        <>
            <InputGroup className="mb-3">
                <FormControl 
                    aria-describedby="basic-addon1" 
                    type="text" 
                    name={`task_description_${props.taskId}`} 
                    id={`task_description_${props.taskId}`} 
                    value={description}
                    onChange={(e:any) => setDescription(e.target.value) } />

                <CategoryPicker initialValue={categoryId} set={setCategoryId}/>    
                <DropdownButton
                    as={InputGroup.Prepend}
                    variant="outline-secondary"
                    title={formatStatus(status)}
                    id="input-group-dropdown-1">
                        {
                            [Status.NotStarted, Status.InProgress, Status.Done]
                                .map(status => 
                                    <Dropdown.Item href="#" key={status} eventKey={""+status} onClick={() => setStatus(status)}>{formatStatus(status)}</Dropdown.Item>
                                )
                        }
                </DropdownButton>
                <Button onClick={() => {
                     props.onSubmit(props.taskId, description, status, categoryId);
                     props.afterUpdate();
                }} variant="primary">Update</Button>
            </InputGroup>
        </>
    );
}

function mapStateToProps(state: any) {
    return {};
}

function mapDispatchToProps(dispatch: any) {
    return {
        onSubmit: (id: number, description: string, status: number, categoryId: number) => {
            dispatch(updateTaskAsync(id, description, status, categoryId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTaskForm);