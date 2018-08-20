import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todoApp from "./reducers";

export function initializeStore(initialState = {}) {
  return createStore(todoApp, initialState, composeWithDevTools());
}
