import React, { Component } from 'react';
import Header from '/src/components/header/header';
import About from '/src/components/about/about';
import Resume from '/src/components/resume/resume';
import Portfolio from '/src/components/portfolio/portfolio';
import Testimonials from '/src/components/testimonials/testimonials';
import ContactUs from '/src/components/contactus/contactus';
import Footer from '/src/components/footer/footer';

class App extends Component {
  render() {
    return (
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
  }
} export default App;
