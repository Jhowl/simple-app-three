import React from 'react';

import Container from 'react-bootstrap/Container';
import Footer from './footer';
import Tabbed from './Tabbed';

import './App.css';


const App = () => (
  <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Bem Vindo ao 3 de vida!</h1>
      <Tabbed />
      <Footer />
    </Container>
  </Container>
);

export default App;
