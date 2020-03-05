import { Button } from "react-bootstrap";
import React from "react";
import store from "../../redux/store";
import { removeTask } from "../../redux/actions";

const RemoveTaskButton: React.FC<{taskId: number}> = (props) => {
    function onClick(){
        store.dispatch(Object.assign({}, removeTask({id: props.taskId})));
    }

    return (
        <Button onClick={onClick} >
            X
        </Button>
    );
}

export default RemoveTaskButton;