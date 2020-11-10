import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

export const FJumbotron = () => {
  return (
    <footer>
      <Jumbotron fluid className="footer">
        <Container>
          <h3>Projeto React</h3>
          <p></p>
        </Container>
      </Jumbotron>
    </footer>
  );
};

export default FJumbotron;
