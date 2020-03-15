import React, { Component } from 'react';
import { Button } from 'reactstrap';

import Header from './components/Header';
import InputForm from './components/InputForm';
import FollowerCard from './components/FollowerCard';
export default class App extends Component {
  state = {
    userData: {},
    followersData: []
  };

  // 1) get the inputted username data
  fetchUserData = async username => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const json = await response.json();

    return json;
  };
  // 2) set the userData with the fetched data from  (1)
  setUserData = username => {
    this.fetchUserData(username)
      .then(data => {
        this.setState({ userData: data, followerData: [] });
      })
      .catch(error => console.error(error));
  };

  // 3) get the followers list
  fetchFollowers = async () => {
    const response = await fetch(this.state.userData.followers_url);
    const json = await response.json();

    return json;
  };
  // 4) get the data for each follower in the list returned from  (3)
  fetchFollowersData = () => {
    this.fetchFollowers()
      .then(list => {
        list.map(item => this.setFollowersData(item.login));
      })
      .catch(error => console.error(error));
  };
  // 5) set the followersData with the fetch data of each follower from  (4)
  setFollowersData = async followerUsername => {
    this.fetchUserData(followerUsername).then(followerData => {
      this.setState({
        followersData: [...this.state.followersData, followerData]
      });
    });
  };

  componentDidUpdate(...args) {
    if (args[1].username !== this.state.username) {
      this.setUserData(this.state.username);
    }
  }

  render() {
    const { userData, followersData } = this.state;

    return (
      <div className='App'>
        <Header />
        <div className='under-logo'>
          <InputForm setUserData={this.setUserData} />

          {Object.keys(userData).length > 0 > 0 && (
            <Button className='followers-btn'>Followers</Button>
          )}
        </div>
        <div className='user-card'>
          <section>
            {Object.keys(userData).length > 0 ? (
              <>
                <FollowerCard
                  userData={userData}
                  // fetchFollowersData={this.fetchFollowersData}
                />
              </>
            ) : null}
          </section>
        </div>

        <div className='followers-cards'>
          {followersData.map(follower => (
            <FollowerCard key={follower.id} userData={follower} />
          ))}
        </div>
      </div>
    );
  }
}
