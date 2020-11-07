// UncontrolledLottie.jsx
import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/erro.json';

class Erro404 extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div>
        <Lottie options={defaultOptions} height={480} width={480} />
      </div>
    );
  }
}

export default Erro404;
