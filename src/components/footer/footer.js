import React from 'react';
import 'boxicons';

const Footer = () => (
  <footer className="s-footer">
    <div className="row">
      <div className="column large-4 medium-6 w-1000-stack s-footer__social-block">
        <ul className="s-footer__social">
          <li>
            <a href="https://www.facebook.com/thewolfraptor">
              <box-icon type="logo" name="facebook" color="white" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/thewolfraptor">
              <box-icon name="twitter" type="logo" color="white" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/wolfrapt0r/?hl=en">
              <box-icon name="instagram" type="logo" color="white" />
            </a>
          </li>
          <li>
            <a href="https://wa.link/4au3cj">
              <box-icon name="whatsapp" type="logo" color="white" />
            </a>
          </li>
          <li>
            <a href="https://github.com/amrendra-rathore">
              <box-icon name="github" type="logo" color="white" />
            </a>
          </li>
          <li>
            <a href="https://in.linkedin.com/in/wolfraptor">
              <box-icon name="linkedin" type="logo" color="white" />
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
