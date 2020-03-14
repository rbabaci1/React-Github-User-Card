import React, { Component } from 'react';

import Header from './components/Header';
import InputForm from './components/InputForm';

export default class App extends Component {
  state = {
    username: '',
    userData: {},
    followersData: []
  };

  getUsername = username => this.setState({ username: username });

  setUserData = async username => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const json = await response.json();

    this.setState({ userData: json });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.username !== this.state.username) {
      this.setUserData(this.state.username);
    }
  }

  render() {
    console.log(this.state.userData);
    return (
      <div className='App'>
        <Header />

        <InputForm getUsername={this.getUsername} />
      </div>
    );
  }
}
