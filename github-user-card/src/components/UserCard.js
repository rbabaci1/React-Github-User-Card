import React, { useState } from 'react';
import {
  Collapse,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

export default function UserCard({ userData }) {
  console.log(userData);
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState('Show Info');

  const onEntered = () => setStatus('Hide Info');
  const onExited = () => setStatus('Show Info');
  const toggle = () => setCollapse(!collapse);

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
              <span>Location: {userData.location}</span>{' '}
            </p>

            <p>
              <span>Profile: </span>
              <a href={userData.html_url} target='blank'>
                GitHub page
              </a>{' '}
            </p>

            <p>
              <span>Followers: {userData.followers}</span>
            </p>

            <p>
              <span>Following: {userData.following}</span>
            </p>

            <p>
              <span>Bio: {userData.bio}</span>
            </p>
          </Collapse>
        </CardBody>
      </Card>
    </div>
  );
}
