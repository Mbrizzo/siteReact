// UncontrolledLottie.jsx
import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/loading.json';

class Loading extends Component {
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
        <Lottie options={defaultOptions} height={300} width={300} />
      </>
    );
  }
}

export default Loading;
