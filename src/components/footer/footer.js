import React from 'react';

const Footer = () => (
  <footer className="s-footer">
    <div className="row">
      <div className="column large-4 medium-6 w-1000-stack s-footer__social-block">
        <ul className="s-footer__social">
          <li>
            <a href="https://facebook.com">
              <i className="fab fa-facebook-f" aria-hidden="true" />
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com/thewolfraptor">
              <i className="fab fa-twitter" aria-hidden="true" />
              Twitter
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <i className="fab fa-instagram" aria-hidden="true" />
              Instagram
            </a>
          </li>
          <li>
            <a href="https://dribbble.com/">
              <i className="fab fa-dribbble" aria-hidden="true" />
              Dribble
            </a>
          </li>
          <li>
            <a href="https://in.linkedin.com/in/wolfraptor">
              <i className="fab fa-linkedin-in" aria-hidden="true" />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className="column large-7 medium-6 w-1000-stack ss-copyright">
        <span>© Copyright Ceevee 2021</span>
        <span>
          Made with  &#128153; by &nbsp;
          <a href="https://github.com/amrendra-rathore">Amrendra Singh Rathore</a>
        </span>
      </div>
    </div>
    <div className="ss-go-top">
      <a className="smoothscroll" title="Back to Top" href="#top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z" /></svg>
      </a>
    </div>
    {' '}
    {/* end ss-go-top */}
  </footer>
);

export default Footer;
