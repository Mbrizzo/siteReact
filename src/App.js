import './App.css';
import { BrowserRouter, Routes, Route, Linnk } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import Fab from './components/Fab';
import Home from './Home';
import Sobre from './Sobre';
import Header from './Header';
import Err from './components/Err';
//import Footer from './components/Footer';
import Contato from './Contato';
import FJumbotron from './components/FJumbotron';

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
          <Route path="reserva" element={<Contato />} />
          <Route path="*" element={<Err />} />
        </Routes>

        <FJumbotron />
      </div>
    </BrowserRouter>
  );
};

export default App;
