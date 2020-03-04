import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TasksList from "./components/taskList/TasksList";
import VisibleTodoList from "./components/VisibleTasksList/VisibleTasksList";

const Routing: React.FC = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="guest" />
            <Route exact path="/guest" component={VisibleTodoList} />
        </Switch>
    );
}

export default Routing;