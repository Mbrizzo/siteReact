import React, { Fragment } from 'react';
import UncontrolledLottie from './components/UncontrolledLottie';
import Parallax from './components/Parallax';
import Cards from './components/Aviso';
import Kitchen from './components/Kitchen';
import Quote from './components/Quote';
import Head from './Head';

const Home = () => {
  return (
    <Fragment>
      <Head title="Home" description="Essa é a página principal" />
      <Parallax />
      {<br></br>}
      <Cards />
      <h2 style={{ textAlign: 'center' }}>Ferramentas</h2>
      <UncontrolledLottie />
      <hr></hr>
      <Kitchen />
      <Quote />
    </Fragment>
  );
};

export default Home;
