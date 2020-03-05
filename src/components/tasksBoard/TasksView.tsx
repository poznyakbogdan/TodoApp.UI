import {TasksList, ITaskListProps} from "../taskList/TaskList";
import IStateModel from "../../redux/stateModel";
import { connect } from "react-redux";
import { fetchTasks, removeTaskAsync } from "../../redux/actions";

const mapStateToProps = (state: IStateModel) : ITaskListProps => {
    return {
      tasks: state.board.items.map(id => state.entities.tasks.find(x => x.id == id)),
      isLoading: state.board.isFetching
    } as ITaskListProps
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    initialize: () => {
      dispatch(fetchTasks())
    },
    onRemoveItem: (id: number) => {
      dispatch(removeTaskAsync(id))
    }
  }
}

const TasksView = connect(mapStateToProps, mapDispatchToProps)(TasksList);

export default TasksView;