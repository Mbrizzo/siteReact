import React from 'react';
import UncontrolledLottie from './components/UncontrolledLottie';
import Parallax from './components/Parallax';
import Cards from './components/Aviso';
import Kitchen from './components/Kitchen';
import Quote from './components/Quote';

const Home = () => {
  return (
    <div>
      <Parallax />
      {<br></br>}
      <Cards />
      <h2>Ferramentas</h2>
      <UncontrolledLottie />
      <hr></hr>
      <section className="cards">
        <Kitchen />
        {<br></br>}
      </section>
      <section className="depoimentos" fixed="true">
        <Quote />
      </section>
    </div>
  );
};

export default Home;
