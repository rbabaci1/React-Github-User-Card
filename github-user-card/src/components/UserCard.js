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
          src='https://cdn.pixabay.com/photo/2020/03/07/11/54/the-fog-4909513_960_720.jpg'
          alt='Card image cap'
          width='300px'
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
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
