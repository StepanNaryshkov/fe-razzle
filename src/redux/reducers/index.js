import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import user from "./user";
import app from "./app";

const reducers = combineReducers({
  router: routerReducer,
  user,
  app,
});

export default reducers;
