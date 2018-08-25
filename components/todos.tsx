type Props = {
  todos: string[];
  removeTodo: (index: number) => void;
};

export default (props: Props) => (
  <ul className="ul">
    {props.todos.length > 0 ? (
      props.todos.map((todo, i) => (
        <div className="card" key={i}>
          <li>
            {/* <button onClick={() => props.removeTodo(i)} className="button">
              Done
            </button>{" "} */}
            <h4 className="h4">{todo}</h4>
            <span className="actions">Done</span>
          </li>
        </div>
      ))
    ) : (
      <p>Nothing todo. Add some.</p>
    )}

    <style jsx>{`
      .actions {
        font-size: 12px;
        opacity: 0.5;
      }
      .h4 {
        font-size: 27px;
        margin: 0;
        opacity: 0.8;
      }
      .card {
        min-height: 50px;
        border-radius: 10px;
        padding: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        background: white;
      }
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
