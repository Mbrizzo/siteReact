import React from 'react';
import axios from 'axios';
import './Ferramentas.css';
import {
  Card,
  Button,
  Form,
  Col,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import lupa from './assets/lupa.png';
const Load = React.lazy(() => import('./components/Load'));

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
        <h2>As melhores ferramentas para Professores e Alunos</h2>
        <Form className="campoBusca">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" srOnly>
              BUSCAR
            </Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text style={{ backgroundColor: 'tomato' }}>
                  <img src={lupa} alt="Alguma coisa" className="lupa" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                id="inlineFormInputGroup"
                placeholder="  Buscar ferramenta"
                style={{ fontStyle: 'italic' }}
              />
            </InputGroup>
          </Col>
        </Form>
        <React.Suspense fallback={<Load />}></React.Suspense>
        {this.state.ferramentas.map((ferramenta) => (
          <Card style={{ width: '18rem' }} key={ferramenta.id} className="box">
            <Card.Img variant="top" src={ferramenta.src} className="cardImg" />
            <Card.Body
              style={{ backgroundColor: ferramenta.color, fontWeight: 'bold' }}
            >
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
