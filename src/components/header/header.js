import React from 'react';

const Header = () => (
  <header className="s-header">
    <link rel="stylesheet" href="./css/styles.css" />
    <link rel="stylesheet" href="./css/vendor.css" />
    <link rel="stylesheet" href="./public/css/default.css" />
    <link rel="stylesheet" href="./public/css/layout.css" />
    <link rel="stylesheet" href="./public/css/media-queries.css" />
    <link rel="stylesheet" href="./public/css/magnific-popup.css" />
    <div className="row s-header__nav-wrap">
      <nav className="s-header__nav">
        <ul>
          <li className="current"><a className="smoothscroll" href="#hero">Home</a></li>
          <li><a className="smoothscroll" hrclass="current" href="#about">About</a></li>
          <li><a className="smoothscroll" href="#resume">Resume</a></li>
          <li><a className="smoothscroll" href="#portfolio">Works</a></li>
          <li><a className="smoothscroll" href="#contact">Say Hello</a></li>
        </ul>
      </nav>
      <a href="#0" title="Menu">
        <span />
      </a>
    </div>
  </header>
);

export default Header;
