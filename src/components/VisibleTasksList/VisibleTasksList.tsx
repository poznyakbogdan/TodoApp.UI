import React from "react";

import { connect } from 'react-redux'
import { addTask, removeTask, updateTask, RemoveTaskPayload, UpdateTaskPayload } from '../../redux/actions'
import TasksList from '../taskList/TasksList';


const mapStateToProps = (state: any) => {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onRemove: (id: number) => {
        dispatch(removeTask({id} as RemoveTaskPayload))
    },
    onUpdate: (id: number, text: string) => {
        dispatch(updateTask({id, text} as UpdateTaskPayload))
    }
  }
}
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksList);

const VisibleTodoList2 = connect(
    mapStateToProps,
    mapDispatchToProps
  )(TasksList);

export default VisibleTodoList