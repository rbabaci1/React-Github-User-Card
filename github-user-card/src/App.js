import React, { Component } from 'react';

import Header from './components/Header';

export default class App extends Component {
  state = {
    userInfo: {}
  };

  getUserInfo = username => {
    return fetch(`https://api.github.com/users/${username}`);
  };

  render() {
    return (
      <div className='App'>
        <Header />
      </div>
    );
  }
}
