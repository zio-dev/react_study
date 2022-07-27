import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Todos(todos) {
  const todoList = todos.value.map((value, index) => {
    return <li key={index}>{value}</li>;
  });

  return (
    <div className="todo-content">
      <ul>{todoList}</ul>
    </div>
  );
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputTodo: "",
    };
  }

  addToDo(inputTodo) {
    const todos = this.state.todos;
    this.setState({
      todos: todos.concat([inputTodo]),
      inputTodo: "",
    });
  }

  render() {
    const todos = this.state.todos;
    return (
      <div className="todo-list">
        <div className="todo-header" style={{ backgroundColor: "blue" }}>
          <h1 style={{ color: "white" }}>TODOリスト</h1>
        </div>
        <Todos value={todos} />
        <div className="todo-input">
          <input
            type="text"
            value={this.state.inputTodo}
            onChange={(event) =>
              this.setState({ inputTodo: event.target.value })
            }
          />
          <button onClick={() => this.addToDo(this.state.inputTodo)}>
            追加
          </button>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodoList />);
