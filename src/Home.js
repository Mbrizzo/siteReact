import React, { Fragment } from 'react';
import UncontrolledLottie from './components/UncontrolledLottie';
import Parallax from './components/Parallax';
import Cards from './components/Aviso';
import Kitchen from './components/Kitchen';
import Quote from './components/Quote';

const Home = () => {
  return (
    <Fragment>
      <Parallax />
      {<br></br>}
      <Cards />
      <h2>Ferramentas</h2>
      <UncontrolledLottie />
      <hr></hr>
      <Kitchen />
      <Quote />
    </Fragment>
  );
};

export default Home;
