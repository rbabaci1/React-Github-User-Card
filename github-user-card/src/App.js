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
    // only fetch if the username input is different than the previous one
    if (username !== this.state.userData.login) {
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
    }
  };

  // 3) get the followers list
  getFollowersList = async () => {
    const response = await fetch(this.state.userData.followers_url);
    const followersList = await response.json();

    return followersList;
  };

  // 4) get the data for each follower in the list returned from  (3)
  fetchFollowersData = () => {
    // only fetch if there's no followersData
    if (this.state.followersData.length === 0) {
      this.getFollowersList()
        .then(followersList =>
          followersList.map(follower => this.setFollowersData(follower.login))
        )
        .catch(error => console.error(error));
    }
  };

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

  // do not render if followersData list not fully collected
  shouldComponentUpdate(...args) {
    const nextState = args[1];
    const currUserDataNum = Object.keys(this.state.userData).length;
    const nextFollowersNum = nextState.followersData.length;
    const currFollowersNum = this.state.userData.followers;

    if (currUserDataNum > 0 && nextFollowersNum < currFollowersNum) {
      if (nextFollowersNum === 0 || nextFollowersNum === currFollowersNum) {
        return true;
      }

      return false;
    }

    return true;
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
