import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Aviso = () => {
  return (
    <Jumbotron>
      <h1 style={{ textAlign: 'center' }}>
        Conferência Virtual Premier para Ensino a Distância
      </h1>
      <p>
        A conferência virtual do Projeto React é o melhor evento para entender
        melhor, como o ensino digital e à distância pode ser usado para melhorar
        a comunicação.
      </p>
      <p>
        <a href="reserva">
          <Button variant="success">Reservar</Button>{' '}
        </a>
      </p>
    </Jumbotron>
  );
};

export default Aviso;
