import './App.css';
import { BrowserRouter, Routes, Route, Linnk } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import Home from './Home';
import Sobre from './Sobre';
import Header from './Header';
import Err from './components/Err';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="*" element={<Err />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
