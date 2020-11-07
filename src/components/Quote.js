import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Quote = (props) => {
  return (
    <Card>
      <Card.Header>O que andam dizendo sobre nós</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            "Projeto React é simplesmente o melhor trabalho de todos os tempos,
            estou apavorado!!!".{' '}
          </p>
          <footer className="blockquote-footer">
            Professor <cite title="Source Title">Fábio Machado</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default Quote;
