import { Button } from "react-bootstrap";
import React from "react";

const RemoveTaskButton: React.FC<{taskId: number, onClick: Function}> = (props) => {
    return (
        <Button variant="danger" block onClick={() => props.onClick(props.taskId)} >
            x
        </Button>
    );
}

export default RemoveTaskButton;