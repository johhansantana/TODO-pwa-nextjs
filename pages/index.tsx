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
  };
  render() {
    const { todos } = this.props;
    return (
      <div>
        <form>
          <input type="text" onChange={this.onChange} />
          <button type="submit" onClick={this.onSubmit}>
            Add
          </button>
        </form>
        <Todos todos={todos} />
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
