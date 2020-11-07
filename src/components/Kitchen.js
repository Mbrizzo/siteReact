import React from 'react';
import { Card, Button, ListGroup, ListGroupItem, Image } from 'react-bootstrap';

const Kitchen = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.ibb.co/W6k9fW2/quizizz.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Ferramentas gratuitas para ensinar e aprender qualquer coisa, em
          qualquer dispositivo, pessoalmente ou remotamente.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Free</ListGroupItem>
        <ListGroupItem>Open Source</ListGroupItem>
        <ListGroupItem>Iphone - Android - Windows</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button variant="primary">Saiba Mais</Button>
      </Card.Body>
    </Card>
  );
};

export default Kitchen;
