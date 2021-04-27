import React from 'react';
import './components/Fortawesome/fortawesome';
import Header from './components/header/header';
import Hero from './components/header/hero';
import About from './components/about/about';
import ContactUs from './components/contactus/contactus';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from './components/testimonials/testimonials';
import Footer from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// library.add(fas);

const App = () => (

  <div className="App">
    <link rel="stylesheet" href="./css/styles.css" />
    <link rel="stylesheet" href="./css/vendor.css" />
    <link rel="stylesheet" href="./public/css/default.css" />
    <link rel="stylesheet" href="./public/css/layout.css" />
    <link rel="stylesheet" href="./public/css/media-queries.css" />
    <link rel="stylesheet" href="./public/css/magnific-popup.css" />
    <script src="https://kit.fontawesome.com/4da131393a.js" crossOrigin="anonymous" />
    <Header />
    <Hero />
    <About />
    <Resume />
    <Portfolio />
    <Testimonials />
    <ContactUs />
    <Footer />
  </div>
);

export default App;
