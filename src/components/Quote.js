import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';

const Quote = (props) => {
  return (
    <Card>
      <Card.Header style={{ color: '', fontWeight: 'bolder' }}>
        <h5> O que andam dizendo sobre nós </h5>
      </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            "Esse site é simplesmente o melhor trabalho de todos os tempos,
            estou apavorado!!!".{' '}
          </p>
          <footer className="blockquote-footer">
            Professor <cite title="Source Title">Fábio Machado</cite>
          </footer>
          <Image
            src="https://i.ibb.co/55dJTB1/fabio.png"
            roundedCircle
            className="fabio"
          />
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default Quote;
