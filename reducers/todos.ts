import { ADD_TODO } from "../actions/todos";

export default (state = [], action: ADD_TODO) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.text];
    default:
      return state;
  }
};
