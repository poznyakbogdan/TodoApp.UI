import { createStore, applyMiddleware } from "redux";
import todoApp from "./reducers";
import thunkMiddleware from "redux-thunk";
import logger from 'redux-logger';

const store = createStore(
    todoApp,
    applyMiddleware(logger, thunkMiddleware)
  )

export default store;