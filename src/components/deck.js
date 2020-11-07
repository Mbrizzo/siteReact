import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Deck = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.ibb.co/qpJJJ4f/al.png" />
      <Card.Body>
        <Card.Title>AhaSlides</Card.Title>
        <Card.Text>
          O AhaSlides é ótimo para salas de aula, reuniões, workshops e qualquer
          evento que se beneficie da interação do público. Você pode adicionar
          enquetes, questionários divertidos, nuvens de palavras e sessões de
          perguntas e respostas envolventes à sua apresentação.
        </Card.Text>
        <Button variant="primary">Saiba Mais</Button>
      </Card.Body>
    </Card>
  );
};

export default Deck;
