type Props = {
  todos: string[];
};

export default (props: Props) => (
  <ul>
    {props.todos.map((todo, i) => (
      <li key={i}>{todo}</li>
    ))}
  </ul>
);
