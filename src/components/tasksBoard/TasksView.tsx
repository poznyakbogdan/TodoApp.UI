import {TasksList, ITaskListProps} from "../taskList/TaskList";
import IStateModel from "../../redux/stateModel";
import { connect } from "react-redux";

const mapStateToProps = (state: IStateModel) : ITaskListProps => {
    return {
      tasks: state.tasks
    } as ITaskListProps
}

const mapDispatchToProps = (dispatch: any) => {
    return {}
}
  
const TasksView = connect(mapStateToProps, mapDispatchToProps)(TasksList);

export default TasksView;