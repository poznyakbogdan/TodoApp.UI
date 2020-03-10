import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TasksBoard from "./components/tasksBoard/TasksBoard";
import CategoriesList from "./components/categoriesList/CategoriesList";
import Home from "./Home";
import TaskList from "./components/taskList/TaskList";

const Routing: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route match path="/lists/:id" component={TaskList} />
            <Route exact path="/tasks" component={TasksBoard} />
            <Route exact path="/lists" component={CategoriesList} />
        </Switch>
    );
}

export default Routing;