import React from 'react';
import './Testes.css';
import Logo from './assets/logo.png';
import Logo1 from './assets/logo1.png';
import Logo3 from './assets/logo3.png';

export const Testes = () => {
  return (
    <div className="palcoTestes">
      <img alt="" src={Logo} className="logo"></img>
      <img alt="" src={Logo1} className="logo"></img>
      <img alt="" src={Logo3} className="logo"></img>
    </div>
  );
};

export default Testes;
