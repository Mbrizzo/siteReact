import React from 'react';
import video from './assets/video.mp4';

const Sobre = () => {
  return (
    <>
      <video src={video} autoPlay="true" controls="true"></video>
    </>
  );
};

export default Sobre;
