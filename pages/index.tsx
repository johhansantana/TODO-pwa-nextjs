import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo } from "../actions/todos";
import { Todos } from "../components";

type State = {
  inputVal: string;
};

type Props = {
  addTodo: (text: string) => void;
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
  render() {
    const { todos } = this.props;
    const { inputVal } = this.state;
    return (
      <div className="container">
        <div className="content">
          <form>
            <input
              className="input"
              type="text"
              onChange={this.onChange}
              value={inputVal}
            />
            <button className="button" type="submit" onClick={this.onSubmit}>
              Add
            </button>
          </form>
          <Todos todos={todos} />
        </div>
        <style jsx>{`
          :global(body) {
            margin: 0;
            padding: 0;
            background: #f3f3f3;
            font-family: "Roboto", sans-serif;
          }
          .container {
            width: 100vw;
            min-height: 100vh;
            padding-bottom: 25px;
            padding-top: 25px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }
          .content {
            background: white;
            border: 1px solid #e6e6e6;
            box-shadow: 0px 3px 15px #c1c1c1;
            padding: 15px;
            width: 500px;
          }
          .input {
            width: 80%;
            height: 30px;
            font-size: 20px;
            border: 1px solid gray;
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
      addTodo
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
