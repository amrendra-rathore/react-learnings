import React from 'react';
import 'boxicons';

const Hero = () => (
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
            <a href="https://www.facebook.com">
              <box-icon type="logo" name="facebook" color="white" />
            </a>
            <a href="https://twitter.com/thewolfraptor">
              <box-icon name="twitter" type="logo" color="white" />
            </a>
            <a href="https://www.instagram.com">
              <box-icon name="instagram" type="logo" color="white" />
            </a>
            <a href="https://wa.link/4au3cj">
              <box-icon name="whatsapp" type="logo" color="white" />
            </a>
            <a href="https://github.com/amrendra-rathore">
              <box-icon name="github" type="logo" color="white" />
            </a>
            <a href="https://in.linkedin.com/in/wolfraptor">
              <box-icon name="linkedin" type="logo" color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="s-hero__scroll">
      <a href="#about" className="s-hero__scroll-link smoothscroll">
        <span className="scroll-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)', transform: 'none', msFilter: 'none' }}><path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z" /></svg>
        </span>
        <span className="scroll-text">Scroll Down</span>
      </a>
    </div>
  </section>
);

export default Hero;
