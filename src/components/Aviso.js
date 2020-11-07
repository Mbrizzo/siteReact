import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Aviso = (props) => {
  return (
    <Jumbotron>
      <h1>Conferência Virtual Premier para Ensino à Distância</h1>
      <p>
        A conferência virtual do Projeto React é o melhor evento para entender
        melhor, como o ensino digital e à distância pode ser usado para melhorar
        a comunicação
      </p>
      <p>
        <Button variant="primary">Reservar</Button>
      </p>
    </Jumbotron>
  );
};

export default Aviso;
