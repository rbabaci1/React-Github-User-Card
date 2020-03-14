import React, { Component } from 'react';
export default class InputForm extends Component {
  state = {
    username: ''
  };
  initialState = this.state;

  handleChange = event => this.setState({ username: event.target.value });
  clearInputField = () => this.setState(this.initialState);

  handleSubmit = event => {
    event.preventDefault();

    this.props.getUsername(this.state.username);
    this.clearInputField();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='...Username'
          value={this.state.username}
          onChange={this.handleChange}
        />

        <button>Show profile</button>
      </form>
    );
  }
}
