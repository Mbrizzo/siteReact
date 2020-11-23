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
            <Card.Img variant="top" src={ferramenta.src} className="cardImg" />
            <Card.Body>
              <Card.Title>{ferramenta.name}</Card.Title>
              <Card.Text>{ferramenta.description}</Card.Text>
              <a href={ferramenta.link} target="_blank">
                <Button variant="dark">Saiba Mais</Button>
              </a>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}

export default Ferramentas;
