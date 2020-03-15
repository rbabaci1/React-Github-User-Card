import React, { useState } from 'react';
import {
  Collapse,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';

export default function UserCard({ userData }) {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState('Show Info');

  const onEntered = () => setStatus('Hide Info');
  const onExited = () => setStatus('Show Info');
  const toggle = event => {
    event.preventDefault();
    event.stopPropagation();
    setCollapse(!collapse);
  };

  return (
    <div className='card-container'>
      <Card>
        <CardImg
          top
          src={userData.avatar_url}
          alt='Card image cap'
          width='300px'
        />
        <CardBody>
          <CardTitle>
            <span className='label'>name:</span>
            {userData.name}
          </CardTitle>
          <p className='username'>
            <span className='label'>username:</span>
            {userData.login}
          </p>

          <Button color='info' onClick={toggle}>
            {status}
          </Button>

          <Collapse isOpen={collapse} onEntered={onEntered} onExited={onExited}>
            <p>
              <span>Location: </span> {userData.location}
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
          </Collapse>
        </CardBody>
      </Card>
    </div>
  );
}
