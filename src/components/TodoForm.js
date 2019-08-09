import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoForm extends Component {
  inputRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();

    const inputText = this.inputRef.current.value;

    this.props.addItem(inputText);
    this.inputRef.current.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.inputRef} />
      </form>
    );
  }
}

TodoForm.propTypes = {
  addItem: PropTypes.func.isRequired,
};
