import React from 'react';

const About = () => (
  <section id="about" className="s-about target-section">
    <div className="row">
      <div className="column large-3 tab-12">
        <img className="s-about__pic" src="images/avatars/user-06.jpg" alt="" height="300px" width="280px" />
      </div>
      <div className="column large-9 tab-12 s-about__content">
        <h3 style={{ textAlign: 'left' }}>About Me</h3>
        <p style={{ textAlign: 'justify' }}>
          Solution-driven web developer and a blockchain enthusiast who works towards building
          web applications focused on user experience. Technically skilled with hands on experience
          in HTML, CSS and JavaScript.
          A determined professional who works towards finding technical solutions and determining
          customer satisfaction.
          Confident and focused with a good communication and problem solving skills.
        </p>
        <hr />
        <div className="row s-about__content-bottom">
          <div className="column w-1000-stack">
            <h3 style={{ textAlign: 'left' }}>Contact Details</h3>
            <p style={{ textAlign: 'left' }}>
              Amrendra Singh Rathore
              {' '}
              <br />
              303 SF, Block 22, Omega 1
              {' '}
              <br />
              Greater Noida, Uttar Pradesh 201308 IN
              {' '}
              <br />
              <a href="tel:+917760838211">+91-7760838211</a>
              {' '}
              <br />
              <a href="mailto:amrendra.rathore@successive.tech">amrendra.rathore@successive.tech</a>
            </p>
          </div>
          <div className="column w-1000-stack">

            <a href="#0" className="btn btn--download">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: '' }}>
                <path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" />
                <path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" />
              </svg>
              Download CV
            </a>

          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
