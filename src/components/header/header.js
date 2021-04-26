import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => (
  <div>
    <link rel="stylesheet" href="./css/styles.css" />
    <link rel="stylesheet" href="./css/vendor.css" />
    <link rel="stylesheet" href="./public/css/default.css" />
    <link rel="stylesheet" href="./public/css/layout.css" />
    <link rel="stylesheet" href="./public/css/media-queries.css" />
    <link rel="stylesheet" href="./public/css/magnific-popup.css" />
    <script src="https://kit.fontawesome.com/4da131393a.js" crossOrigin="anonymous" />
    <div style={{ display: 'flex', justifyContent: 'center', padding: '24px 0px' }}>
      <ul style={{
        width: '40%', display: 'flex', justifyContent: 'space-around', listStyleType: 'none',
      }}
      >
        <li className="current"><a className="smoothscroll" href="#hero">Home</a></li>
        <li><a className="smoothscroll" hrclass="current" href="#about">About</a></li>
        <li><a className="smoothscroll" href="#resume">Resume</a></li>
        <li><a className="smoothscroll" href="#portfolio">Works</a></li>
        <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
        <li><a className="smoothscroll" href="#contact">Contact Us</a></li>
      </ul>

      <a href="#0" title="Menu">
        <span />
      </a>
    </div>
    <section id="hero" className="s-hero target-section">
      <div className="s-hero__bg rellax" data-rellax-speed={-7} />
      <div className="row s-hero__content">
        <div className="column" style={{ width: '80%' }}>
          <div className="s-hero__content-about">
            <h1>I&apos;m Amrendra (wolfraptor)</h1>
            <h3>
              I&apos;m India based
              <span> Full Stack Developer</span>
              ,
              <span> Illustrator </span>
              and
              <span> Web Designer </span>
              creating awesome and
              effective visual identities for companies of all sizes around the globe. Let&apos;s
              <a className="smoothscroll" href="#about"> start scrolling </a>
              and learn more
              <a className="smoothscroll" href="#about"> about me</a>
              .
            </h3>
            <div className="s-hero__content-social">
              <a href="www.facebook.com">
                {/* <i className="fab facebook" /> */}
                {/* <FontAwesomeIcon icon={['fab', 'facebook']} /> */}

              </a>
              <a href="https://twitter.com/thewolfraptor">
                {/* <FontAwesomeIcon icon="twitter" /> */}
              </a>
              <a href="www.instaram.com">
                {/* <FontAwesomeIcon icon="instagram" /> */}
              </a>
              <a href="https://dribbble.com/">
                {/* <FontAwesomeIcon icon="dribble" /> */}
              </a>
              <a href="https://www.behance.net/">
                {/* <FontAwesomeIcon icon="behance" /> */}
              </a>
              <a href="https://in.linkedin.com/in/wolfraptor">
                {/* <FontAwesomeIcon icon="linkedin" />
                <FontAwesomeIcon icon="whatsapp" /> */}
              </a>
            </div>
          </div>
          {' '}
          {/* end s-hero__content-about */}
        </div>
      </div>
      {' '}
      {/* s-hero__content */}
      <div className="s-hero__scroll">
        <a href="#about" className="s-hero__scroll-link smoothscroll">
          <span className="scroll-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)', transform: 'none', msFilter: 'none' }}><path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z" /></svg>
          </span>
          <span className="scroll-text">Scroll Down</span>
        </a>
      </div>
      {' '}
      {/* s-hero__scroll */}
    </section>
  </div>
);

export default Header;
