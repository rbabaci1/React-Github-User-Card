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

    if (this.state.username.length > 0) {
      this.props.fetchUserData(this.state.username);
      this.clearInputField();
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Enter username</h3>

        <div className='btn-input-div'>
          <button>
            <span role='img' aria-label='search icon'>
              🔍
            </span>
          </button>
          <input
            type='text'
            placeholder='...Username'
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}
