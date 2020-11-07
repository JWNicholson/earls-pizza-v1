import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData,productData2 } from './components/Products/data';
import { GlobalStyle } from './globalStyles';



function App() {
  return (
    <Router>
      <GlobalStyle />
     <Hero />
     <Products heading="Make a choice" data={productData} />

     <Products heading="Have a sandwich instead." data={productData2} />
    </Router>
  );
}

export default App;
