import React, { Component } from 'react';
import TodoForm from './TodoForm';

export default class TodoList extends Component {
  state = {
    list: [
      { id: 1, text: 'To Do One', isDone: false },
      { id: 2, text: 'To Do Two', isDone: false },
      { id: 3, text: 'To Do Three', isDone: false },
    ],
  }

  addItem = () => {

  }

  render() {
    return (
      <div className="todo-list">
        TodoList
        <TodoForm addItem={this.addItem} />
        <ul>
          {
            this.list.map(item => {
            });
          }
        </ul>
      </div>
    );
  }
}
