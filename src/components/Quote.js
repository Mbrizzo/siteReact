import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';

const Quote = (props) => {
  return (
    <Card>
      <Card.Header style={{ color: '', fontWeight: 'bolder' }}>
        <h5> O que andam dizendo sobre nós </h5>
      </Card.Header>
      <Card.Body className="primeiroQuote">
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
      <Card.Body className="segundoQuote">
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            "Eu ressucitei apenas para dizer que: 'este site Non ecziste'!!!".{' '}
          </p>
          <footer className="blockquote-footer">
            Padre <cite title="Source Title">Quevedo</cite>
          </footer>
          <Image
            src="https://i.ibb.co/nR7mJMf/quevedo-transparente.png"
            roundedCircle
            className="padre"
          />
        </blockquote>
      </Card.Body>
      <Card.Body className="terceiroQuote">
        <blockquote className="blockquote mb-0">
          <p> "É o básico né". </p>
          <footer className="blockquote-footer">
            Aluno <cite title="Source Title">6º Período</cite>
          </footer>
          <Image
            src="https://i.ibb.co/KhPdB2s/b-sico.png"
            roundedCircle
            className="joao"
          />
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default Quote;
