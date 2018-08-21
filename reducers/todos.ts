import { ADD_TODO, REMOVE_TODO } from "../actions/todos";

export default (state = [], action: ADD_TODO | REMOVE_TODO) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.text];
    case "REMOVE_TODO":
      let newTodos = [...state];
      newTodos.splice(action.index, 1);
      return newTodos;
    default:
      return state;
  }
};
