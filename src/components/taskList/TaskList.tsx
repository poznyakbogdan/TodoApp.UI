import React from "react";
import Task from "../../models/Task";
import { Spinner, ListGroup, ListGroupItem } from "react-bootstrap";
import TasksListItem from "../taskItem/TasksListItem";
import IStateModel from "../../redux/types";
import { fetchTasksAsync, removeTaskAsync } from "../../redux/actions/asyncActions";
import { connect } from "react-redux";

export interface ITaskListProps {
    tasks: Task[],
    isLoading: boolean,
    initialize: Function,
    onRemoveItem: Function
}

let TasksList: React.FC<ITaskListProps> = (props) => {
    React.useEffect(() => {
        props.initialize();
    }, [])

    return props.isLoading ? <Spinner animation="border" variant="primary" /> : (
        <div className="container">
            <h3>To do</h3>
            <div className="container">
                <ListGroup as="ul">
                    {
                        props.tasks.map(task => <TasksListItem task={task} onRemoveItem={props.onRemoveItem} key={task.id} />)
                    }    
                </ListGroup>
            </div>
        </div>
    );
}

const mapStateToProps = (state: IStateModel) : ITaskListProps => {
    return {
      tasks: state.board.items.map(id => state.entities.tasks.find(x => x.id == id)),
      isLoading: state.board.isFetching
    } as ITaskListProps
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    initialize: () => {
      dispatch(fetchTasksAsync())
    },
    onRemoveItem: (id: number) => {
      dispatch(removeTaskAsync(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)