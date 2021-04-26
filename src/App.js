import React from 'react';
import './components/Fortawesome/fortawesome';
import Header from './components/header/header';
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
    <Header />
    <About />
    <Resume />
    <Portfolio />
    <Testimonials />
    <ContactUs />
    <Footer />
  </div>
);

export default App;
