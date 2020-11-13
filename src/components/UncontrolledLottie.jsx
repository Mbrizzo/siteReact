// UncontrolledLottie.jsx
import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/work.json';

class UncontrolledLottie extends Component {
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
      <>
        <a href="/ferramentas">
          <Lottie options={defaultOptions} height={300} width={300} />
        </a>
      </>
    );
  }
}

export default UncontrolledLottie;
