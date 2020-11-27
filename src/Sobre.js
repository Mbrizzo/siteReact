import React from 'react';
import videoNatal from './assets/natal-redentor.mp4';
import Head from './Head';

const Sobre = () => {
  return (
    <>
      <Head title="Sobre" description="Essa é a página Sobre" />
      <h2>A Fac Redentor, lhes deseseja um Feliz Natal!!!</h2>
      <video src={videoNatal} autoPlay="false" controls="true"></video>
    </>
  );
};

export default Sobre;
