import React, { Component } from 'react';

import Header from './components/Header';
import InputForm from './components/InputForm';
import UserCard from './components/UserCard';
export default class App extends Component {
  state = {
    userData: {},
    followersData: []
  };

  setUserData = data => this.setState({ userData: data });
  setFollowersData = data => this.setState({ followersData: data });

  fetchUserData = async username => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const json = await response.json();

    this.setUserData(json);
  };
  fetchFollowersData = async username => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const json = await response.json();

    this.setFollowersData(json);
  };

  componentDidUpdate(...args) {
    if (args[1].username !== this.state.username) {
      this.setUserData(this.state.username);
    }
  }

  render() {
    const { userData } = this.state;
    return (
      <div className='App'>
        <Header />
        <InputForm fetchUserData={this.fetchUserData} />

        <div className='user-card'>
          <section>
            {Object.keys(userData).length > 0 ? (
              <UserCard userData={userData} />
            ) : null}
          </section>
        </div>

        <div className='followers-cards'></div>
      </div>
    );
  }
}
