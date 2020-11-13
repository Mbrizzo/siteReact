import React from 'react';
import { Footer } from 'react-materialize';
import youtube from '../assets/ic_youtube.png';
import facebook from '../assets/ic_facebook.png';
import instagram from '../assets/ic_instagram.png';
import twuitter from '../assets/ic_twuitter.png';
import './Footer.css';
import Logo from '../assets/logo.png';
import Logo1 from '../assets/logo1.png';
import Logo2 from '../assets/logo2.png';
import Logo3 from '../assets/logo3.png';

const Deck = () => {
  return (
    <Footer
      className="footer"
      style={{ background: '#212121' }}
      links={
        <ul>
          <li>
            <a className="orange-text text-lighten-3" href="ferramentas">
              Ferramentas
            </a>
          </li>
          <li>
            <a className="orange-text text-lighten-3" href="sobre">
              Sobre
            </a>
          </li>
          <li>
            <a className="orange-text text-lighten-3" href="contato">
              Contato
            </a>
          </li>
          <li>
            <a className="orange-text text-lighten-3" href="#!">
              Git
            </a>
          </li>
        </ul>
      }
      moreLinks={
        <a className="grey-text text-lighten-4 right" href="sobre">
          <div className="redes">
            <img src={youtube} alt="Alguma coisa" className="redesSociais" />
            <img src={facebook} alt="Alguma coisa" className="redesSociais" />
            <img src={instagram} alt="Alguma coisa" className="redesSociais" />
            <img src={twuitter} alt="Alguma coisa" className="redesSociais" />
          </div>
        </a>
      }
    >
      <img alt="" src={Logo1}></img>
      <p className="web3">if (web3.prof == "fábio")</p>
      Projeto React 2020 Copyright
    </Footer>
  );
};

export default Deck;
