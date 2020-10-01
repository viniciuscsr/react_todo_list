import React from 'react';
import Todos from './Components/Todos';

import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'take out the trash',
        completed: false,
      },
      {
        id: 2,
        title: 'walk the dog',
        completed: false,
      },
      {
        id: 3,
        title: 'meeting',
        completed: false,
      },
    ],
  };

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    return (
      <div className='App'>
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
