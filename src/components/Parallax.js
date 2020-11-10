import React from 'react';
import { Parallax } from 'react-materialize';

const Paralax = () => {
  return (
    <div>
      <Parallax
        image={<img alt="" src="https://i.ibb.co/0KhTkTw/3784896.png" />}
        options={{
          responsiveThreshold: 0,
        }}
      />
      <div className="section white">
        <div className="row container">
          <h2 className="header-parallax">Projeto React</h2>
          <h3
            className="grey-text text-darken-3 lighten-3"
            style={{ color: '', fontWeight: 'bolder' }}
          >
            Oferecendo as ferramentas e dicas que professores e famílias
            precisam para ajudar os alunos a continuar aprendendo.
          </h3>
        </div>
      </div>
      <Parallax
        image={<img alt="" src="https://i.ibb.co/LCYkvDr/zuera.png" />}
        options={{
          responsiveThreshold: 0,
        }}
      />
    </div>
  );
};

export default Paralax;
