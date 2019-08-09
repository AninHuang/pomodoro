import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
  handleClick = () => {
    this.props.toggleItem(this.props.id);
  }

  render() {
    let className = 'todo-item';
    if (this.props.done) {
      className += ' done';
    }

    return (
      <li className={className} onClick={this.handleClick}>
        {this.props.children}
      </li>
    );
  }
}

TodoItem.protoType = {
  id: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
  toggleItem: PropTypes.func.isRequired,
};
