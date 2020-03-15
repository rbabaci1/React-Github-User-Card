import React from 'react';

export default function UserCard({ userData }) {
  return (
    <div className='user-card'>
      <img src={userData.avatar_url} alt='user avatar' />

      <section className='info'>
        <h4>{userData.name}</h4>
        <p>
          <span>username: </span>
          {userData.login}
        </p>
        <p>
          <span>Location: </span>
          {userData.location}
        </p>
        <p>
          <span>Profile: </span>
          <a href={userData.html_url} target='blank'>
            GitHub page
          </a>{' '}
        </p>

        <p>
          <span>Followers: </span>
          {userData.followers}
        </p>

        <p>
          <span>Following: </span>
          {userData.following}
        </p>

        <p>
          <span>Bio: </span>
          {userData.bio}
        </p>
      </section>
    </div>
  );
}
