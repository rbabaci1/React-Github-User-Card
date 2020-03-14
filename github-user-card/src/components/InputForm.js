import React, { Component } from 'react';
export default class InputForm extends Component {
  state = {
    username: ''
  };

  initialState = this.state.username;

  handleChange = event => this.setState({ username: event.target.value });

  handleSubmit = event => {
    event.preventDefault();

    this.setState(this.initialState);
  };

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='...Username'
          value={this.state.username}
          onChange={this.handleChange}
        />

        <button onSubmit={this.handleSubmit}>Show profile</button>
      </form>
    );
  }
}
