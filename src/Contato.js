import React from 'react';
import Contact from './components/Contact';
import { Form, Button } from 'react-bootstrap';
import './Contato.css';
import Head from './Head';

export const Contato = () => {
  return (
    <>
      <Head title="Contato" description="Essa é a página Contato" />
      <Contact />
      <div className="contato">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{ color: '#212121', fontWeight: 'bolder' }}>
              <h5>Fale Conosco</h5>
            </Form.Label>
            <Form.Control
              className="email"
              type="email"
              placeholder="Digite seu email"
            />
            <Form.Text className="text-muted">
              Nós nunca iremos compartilhar seu E-mail.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{ color: '#212121', fontWeight: 'bolder' }}>
              Digite sua mensagem
            </Form.Label>
            <Form.Control as="textarea" rows={3} className="textoEmail" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
      {<br></br>}
    </>
  );
};

export default Contato;
