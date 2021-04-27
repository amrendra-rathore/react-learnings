import React from 'react';
import Header from './components/header/header';
import Hero from './components/header/hero';
import About from './components/about/about';
import ContactUs from './components/contactus/contactus';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Footer from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (

  <div className="App">
    <link rel="stylesheet" href="./css/styles.css" />
    <link rel="stylesheet" href="./css/vendor.css" />
    <link rel="stylesheet" href="./public/css/default.css" />
    <link rel="stylesheet" href="./public/css/layout.css" />
    <link rel="stylesheet" href="./public/css/media-queries.css" />
    <link rel="stylesheet" href="./public/css/magnific-popup.css" />
    <Header />
    <Hero />
    <About />
    <Resume />
    <Portfolio />
    <ContactUs />
    <Footer />
  </div>
);

export default App;
