import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore } from 'redux'
import todoApp from "./redux/reducers";

const store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <App/>    
    </Provider>,
    document.getElementById("root")
);