import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  state = {
    list: [
      { id: 1, text: 'To Do One', isDone: false },
      { id: 2, text: 'To Do Two', isDone: false },
      { id: 3, text: 'To Do Three', isDone: false },
    ],
  }

  addItem = (text) => {
    this.setState((state) => {
      const item = {
        id: state.list.length + 1,
        text,
        done: false,
      };
      const list = state.list.concat(item);
      return { list };
    });
  }

  toggleItem = (id) => {
    this.setState((state) => {
      const list = state.list.map((item) => {
        if (item.id === id) {
          return {
            id: item.id,
            text: item.text,
            done: !item.done,
          };
        }
        return item;
      });
      return {
        list,
      };
    });
  }

  render() {
    return (
      <div className="todo-list">
        TodoList
        <TodoForm addItem={this.addItem} />
        <ul className="todo-items">
          {
            this.state.list.map(item => (
              <TodoItem
                id={item.id}
                done={item.done}
                key={item.id}
                toggleItem={this.toggleItem}
              >
                {item.text}
              </TodoItem>
            ))
          }
        </ul>
      </div>
    );
  }
}
