import React from 'react';
import Contact from './components/Contact';
import { Form, Button } from 'react-bootstrap';

export const Contato = () => {
  return (
    <div>
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
              placeholder="Enter email"
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
          <Button variant="danger" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contato;
