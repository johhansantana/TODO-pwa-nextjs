export type ADD_TODO = {
  type: "ADD_TODO";
  text: string;
};

export type REMOVE_TODO = {
  type: "REMOVE_TODO";
  index: number;
};

export function addTodo(text: string): ADD_TODO {
  return {
    type: "ADD_TODO",
    text
  };
}

export function removeTodo(index: number): REMOVE_TODO {
  return {
    type: "REMOVE_TODO",
    index
  };
}
