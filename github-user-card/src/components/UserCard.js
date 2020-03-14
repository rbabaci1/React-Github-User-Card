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
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </Collapse>
        </CardBody>
      </Card>
    </div>
  );
}
