import React, { Component } from 'react';
import { Button } from 'reactstrap';

import Header from './components/Header';
import InputForm from './components/InputForm';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';

export default class App extends Component {
  state = {
    userData: {},
    followersData: [],
    dataReceived: true
  };

  // 1) get the inputted username data
  fetchUserData = async username => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userInfo = await response.json();

    return userInfo;
  };
  // 2) set the userData with the fetched data from  (1)
  setUserData = username => {
    this.fetchUserData(username)
      .then(userInfo =>
        userInfo.login
          ? this.setState({
              userData: userInfo,
              dataReceived: true
            })
          : this.setState({ dataReceived: false })
      )
      .catch(error => console.error(error));
  };

  // 3) get the followers list
  fetchFollowers = async () => {
    const response = await fetch(this.state.userData.followers_url);
    const followersList = await response.json();

    return followersList;
  };
  // 4) get the data for each follower in the list returned from  (3)
  fetchFollowersData = () =>
    this.fetchFollowers()
      .then(followersList =>
        followersList.map(follower => this.setFollowersData(follower.login))
      )
      .catch(error => console.error(error));

  // 5) set the followersData with the fetch data of each follower from  (4)
  setFollowersData = followerUsername =>
    this.fetchUserData(followerUsername).then(followerData =>
      this.setState({
        followersData: [...this.state.followersData, followerData]
      })
    );

  renderFollowerAsUser = followerData =>
    this.setState({ userData: followerData, followersData: [] });

  componentDidUpdate(...args) {
    const prevState = args[1];

    if (prevState.userData.login !== this.state.userData.login) {
      this.setUserData(this.state.userData.login);
    }
  }

  render() {
    const { userData, followersData } = this.state;

    return (
      <div className='App'>
        <Header />

        <div className='under-logo'>
          <InputForm setUserData={this.setUserData} />

          {Object.keys(userData).length > 0 && (
            <Button onClick={this.fetchFollowersData} className='followers-btn'>
              Show followers
            </Button>
          )}
        </div>

        {!this.state.dataReceived && (
          <span className='server-error'>
            The server is down, please try again later!
          </span>
        )}

        {Object.keys(userData).length > 0 && <UserCard userData={userData} />}

        <div className='followers-cards'>
          {followersData.map(follower => (
            <FollowerCard
              key={follower.id}
              userData={follower}
              renderFollowerAsUser={this.renderFollowerAsUser}
            />
          ))}
        </div>
      </div>
    );
  }
}
