import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TasksList from "./components/taskList/TasksList";

const Routing: React.FC = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="guest" />
            <Route exact path="/guest" component={TasksList} />
        </Switch>
    );
}

export default Routing;