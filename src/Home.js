import React from 'react';
import UncontrolledLottie from './components/UncontrolledLottie';
import Parallax from './components/Parallax';
import Cards from './components/Aviso';
import Deck from './components/deck';
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
      <section className="cards">
        <Deck />
        <Kitchen />
      </section>
      <Quote />
    </div>
  );
};

export default Home;
