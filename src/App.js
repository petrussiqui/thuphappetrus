import React from 'react';
import Header from './sections/header';
import Footer from './sections/footer';
import Router from './routes';
import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router /> 
      <Footer />
    </React.Fragment>
  );
}

export default App;
