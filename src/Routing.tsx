import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Editor from "./components/editor/Editor";

const Routing: React.FC = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="guest" />
            <Route exact path="/guest" component={Editor} />
        </Switch>
    );
}

export default Routing;