import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }
  handleClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  handleDeletion = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList = (): JSX.Element[] => {
    return this.props.todos.map((todo: Todo) => {
      return (
        <p onClick={() => this.handleDeletion(todo.id)} key={todo.id}>
          {todo.title}
        </p>
      );
    });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          Fetch
        </button>
        {this.state.fetching ? <h3>Loading...</h3> : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos: todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
