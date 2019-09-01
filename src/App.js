import React from "react";
import TodoItem from "./components/TodoItem.jsx";
import AddTodo from "./components/AddTodo.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(todo) {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  }
  deleteTodo(id) {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const itemList = this.state.todos.map(item => (
      <div>
        {" "}
        <TodoItem
          key={item.id}
          item={item}
          handleChange={this.handleChange}
          deleteTodo={this.deleteTodo}
        />
      </div>
    ));
    return (
      <div className="todo-list">
        <AddTodo onSubmit={this.addTodo} />
        <h1>To Do List</h1>
        {itemList}
      </div>
    );
  }
}

export default App;
