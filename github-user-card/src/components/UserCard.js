import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  UncontrolledCollapse
} from 'reactstrap';

export default function UserCard() {
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
          <Button color='primary' id='toggler'>
            More info
          </Button>

          <UncontrolledCollapse toggler='#toggler'>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </UncontrolledCollapse>
        </CardBody>
      </Card>
    </div>
  );
}
