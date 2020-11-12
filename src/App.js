import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Fab from './components/Fab';
import Home from './Home';
import Sobre from './Sobre';
import Reservar from './Reservar';
import Header from './Header';
import Err from './components/Err';
import Footer from './components/Footer';
import Contato from './Contato';
import Ferramentas from './Ferramentas';
import Testes from './Testes';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Fab />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="contato" element={<Contato />} />
          <Route path="reserva" element={<Reservar />} />
          <Route path="ferramentas" element={<Ferramentas />} />
          <Route path="testes" element={<Testes />} />
          <Route path="*" element={<Err />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
