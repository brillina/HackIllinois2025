import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar'; // Import Sidebar component
import Product from './components/Product';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar /> 
      <div className="content-area"> 
        <Header />
        <Product />
        <Footer />
      </div>
    </div>
  );
}

export default App;
