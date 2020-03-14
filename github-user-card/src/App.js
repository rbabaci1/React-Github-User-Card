import React, { Component } from 'react';

import Header from './components/Header';

export default class App extends Component {
  state = {
    userData: {},
    followersData: []
  };

  getUserData = username => fetch(`https://api.github.com/users/${username}`);

  getFollowersData = username =>
    fetch(`https://api.github.com/users/${username}/followers`);

  render() {
    return (
      <div className='App'>
        <Header />
      </div>
    );
  }
}
