import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TasksBoard from "./components/tasksBoard/TasksBoard";

const Routing: React.FC = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="guest" />
            <Route exact path="/guest" component={TasksBoard} />
        </Switch>
    );
}

export default Routing;