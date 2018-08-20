type Props = {
  todos: string[];
};

export default (props: Props) => (
  <ul className="ul">
    {props.todos.length > 0 ? (
      props.todos.map((todo, i) => (
        <div key={i}>
          <li className="flex-list">
            <button className="button">Done</button> {todo}
          </li>
          <hr />
        </div>
      ))
    ) : (
      <p>Nothing todo. Add some.</p>
    )}

    <style jsx>{`
      .ul {
        list-style: none;
        padding-left: 0;
        font-size: 23px;
      }
      .button {
        margin-right: 5px;
      }
      .flex-list {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
      }
    `}</style>
  </ul>
);
