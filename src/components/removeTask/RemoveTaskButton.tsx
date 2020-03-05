import { Button } from "react-bootstrap";
import React from "react";

const RemoveTaskButton: React.FC<{taskId: number, onClick: Function}> = (props) => {
    return (
        <Button onClick={() => props.onClick(props.taskId)} >
            X
        </Button>
    );
}

export default RemoveTaskButton;