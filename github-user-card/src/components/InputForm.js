import React, { Component } from 'react';
export default class InputForm extends Component {
  state = {
    username: ''
  };

  handleChange = event => this.setState({ username: event.target.value });

  render() {
    return (
      <div className='input-form'>
        <input
          type='text'
          placeholder='...Username'
          value={this.state.username}
        />

        <button>Show profile</button>
      </div>
    );
  }
}
