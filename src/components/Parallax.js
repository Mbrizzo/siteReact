import React from 'react';
import { Parallax } from 'react-materialize';
import './Parallax.css';

const Paralax = () => {
  return (
    <>
      <Parallax
        image={<img alt="" src="https://i.ibb.co/0KhTkTw/3784896.png" />}
        options={{
          responsiveThreshold: 0,
        }}
      />
      <div className="section white">
        <div className="row container">
          <h1 className="header-parallax" style={{ marginTop: '2rem' }}>
            {''}
          </h1>
          <h2 className="text-parallax" style={{ marginBottom: '3rem' }}>
            Oferecendo as ferramentas e dicas que professores e famílias
            precisam para ajudar os alunos a continuar aprendendo.
          </h2>
        </div>
      </div>
      <Parallax
        image={<img alt="" src="https://i.ibb.co/dPcQmXr/1263.png" />}
        options={{
          responsiveThreshold: 0,
        }}
      />
    </>
  );
};

export default Paralax;
