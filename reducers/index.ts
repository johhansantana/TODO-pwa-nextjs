import { combineReducers } from "redux";
import { addTodo } from "./todos";
const todoApp = combineReducers({
  addTodo
});
export default todoApp;
