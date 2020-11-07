import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import NavBar from './components/NavBar';
import UncontrolledLottie from './components/UncontrolledLottie';
import Parallax from './components/Parallax';
import Cards from './components/Aviso';
import Deck from './components/deck';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <NavBar />
      {<br></br>}
      <section className="logo">
        <UncontrolledLottie />
      </section>
      {<br></br>}
      <Parallax />
      {<br></br>}
      <Cards />
      <Quote />
      <Deck className="decks" />
    </div>
  );
}

export default App;
