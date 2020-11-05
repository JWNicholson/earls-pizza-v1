import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Navbar/Hero/HeroStyles';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Hero />
    </Router>
  );
}

export default App;
