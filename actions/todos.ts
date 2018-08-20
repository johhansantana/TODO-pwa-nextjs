export type ADD_TODO = {
  type: "ADD_TODO";
  text: string;
};

export function addTodo(text: string): ADD_TODO {
  return {
    type: "ADD_TODO",
    text
  };
}
