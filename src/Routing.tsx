import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TasksBoard from "./components/tasksBoard/TasksBoard";
import Categories from "./layouts/Categories";
import Home from "./Home";
import TaskList from "./components/taskList/TaskList";

const Routing: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route match path="/lists/:id" component={TaskList} />
            <Route exact path="/tasks" component={TasksBoard} />
            <Route exact path="/lists" component={Categories} />
        </Switch>
    );
}

export default Routing;