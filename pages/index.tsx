import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo, removeTodo } from "../actions/todos";
import { Todos } from "../components";

type State = {
  inputVal: string;
};

type Props = {
  addTodo: (text: string) => void;
  removeTodo: (index: number) => void;
  todos: string[];
};

class Index extends React.Component<Props, State> {
  state = {
    inputVal: ""
  };

  onChange = e => {
    this.setState({ inputVal: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.inputVal);
    this.setState({
      inputVal: ""
    });
  };
  removeTodo = (index: number) => {
    const { removeTodo } = this.props;
    removeTodo(index);
  };
  render() {
    const { todos, removeTodo } = this.props;
    const { inputVal } = this.state;
    return (
      <div className="container">
        <div className="content">
          <h1 className="title">TODO-PWA</h1>
          <form className="form" onSubmit={this.onSubmit}>
            <input
              className="input"
              type="text"
              onChange={this.onChange}
              value={inputVal}
              placeholder="Type and press enter"
            />
            {/* <button className="button" type="submit" onClick={this.onSubmit}>
              Add
            </button> */}
          </form>
          <Todos todos={todos} removeTodo={removeTodo} />
        </div>
        <style jsx>{`
          :global(body) {
            margin: 0;
            padding: 0;
            background: linear-gradient(180deg, #c900ff, #6e00ff) no-repeat;
            font-family: "Montserrat", sans-serif;
          }
          .title {
            margin-top: 0;
          }
          .form {
            display: flex;
          }
          input {
            outline: none;
          }
          .container {
            width: 100vw;
            height: 100vh;
            margin-top: 25px;
            margin-bottom: 25px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }
          .content {
            background: #f9f9f9;
            padding: 15px;
            width: 500px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            height: 90vh;
          }
          .input {
            width: 100%;
            font-size: 20px;
            font-family: "Montserrat", sans-serif;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
            border: none;
            height: 45px;
            padding: 5px 10px;
            border-radius: 10px;
          }
          :global(.button) {
            font-size: 23px;
            margin-left: 5px;
            background: none;
            cursor: pointer;
          }
          @media (max-width: 600px) {
            .content {
              width: 90%;
            }
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addTodo,
      removeTodo
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
