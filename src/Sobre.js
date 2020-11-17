import React from 'react';
import video from './assets/video.mp4';
import Head from './Head';

const Sobre = () => {
  return (
    <>
      <Head title="Sobre" description="Essa é a página Sobre" />
      <video src={video} autoPlay="true" controls="true"></video>
    </>
  );
};

export default Sobre;
