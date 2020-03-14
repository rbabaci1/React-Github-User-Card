import React, { Component } from 'react';

import Header from './components/Header';
import InputForm from './components/InputForm';
import UserCard from './components/UserCard';
export default class App extends Component {
  state = {
    userData: {},
    followersData: []
  };

  fetchUserData = async username => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const json = await response.json();

    this.setUserData(json);
  };

  setUserData = data => this.setState({ userData: data });

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
          {Object.keys(userData).length > 0 ? (
            <UserCard userData={userData} />
          ) : null}
        </div>

        {/* <div className='followers-cards'>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div> */}
      </div>
    );
  }
}
