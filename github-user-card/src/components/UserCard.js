import React, { Component } from 'react';
import GitHubCalendar from 'github-calendar';

export default class UserCard extends Component {
  componentDidMount() {
    GitHubCalendar('.calendar', this.state.currUsername, {
      responsive: true
    });
  }

  componentDidUpdate(...args) {
    const prevUsername = args[0].userData.login;
    const currUsername = this.props.userData.login;

    if (prevUsername !== currUsername) {
      GitHubCalendar('.calendar', currUsername, {
        responsive: true
      });
    }
  }

  render() {
    return (
      <>
        <div className='user-card'>
          <img src={this.props.userData.avatar_url} alt='user avatar' />

          <section className='info'>
            <h4>{this.props.userData.name}</h4>
            <p>
              <span>username: </span>
              {this.props.userData.login}
            </p>
            <p>
              <span>Location: </span>
              {this.props.userData.location}
            </p>
            <p>
              <span>Profile: </span>
              <a href={this.props.userData.html_url} target='blank'>
                GitHub page
              </a>{' '}
            </p>

            <p>
              <span>Followers: </span>
              {this.props.userData.followers}
            </p>

            <p>
              <span>Following: </span>
              {this.props.userData.following}
            </p>

            <p>
              <span>Bio: </span>
              {this.props.userData.bio}
            </p>
          </section>
        </div>

        <div className='calendar' />
      </>
    );
  }
}
