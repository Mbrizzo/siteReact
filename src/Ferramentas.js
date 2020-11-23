import React from 'react';
import axios from 'axios';
import './Ferramentas.css';

import { Card, Button } from 'react-bootstrap';

class Ferramentas extends React.Component {
  // Estado da Aplicação
  state = {
    ferramentas: [],
    error: null,
  };

  // Fetch your ferramentas immediately after the component is mounted
  componentDidMount = async () => {
    try {
      const response = await axios.get(
        'https://projetoreactapi.herokuapp.com/ferramentas',
      );
      this.setState({ ferramentas: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error } = this.state;

    // Print errors if any
    if (error) {
      return <div>Ocorreu um erro: {error.message}</div>;
    }

    return (
      <div className="areaFerramentas">
        {this.state.ferramentas.map((ferramenta) => (
          <Card style={{ width: '18rem' }} key={ferramenta.id} className="box">
            <Card.Img variant="top" src={ferramenta.image} />
            <Card.Body>
              <Card.Title>{ferramenta.name}</Card.Title>
              <Card.Text>{ferramenta.description}</Card.Text>
              <Button variant="dark">Saiba Mais</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}

export default Ferramentas;
