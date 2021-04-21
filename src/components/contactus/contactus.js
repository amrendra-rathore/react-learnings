import React from 'react';

const ContactUs = () => (
  <section id="contact" className="s-contact target-section">
    <div className="row s-contact__header">
      <div className="column large-12">
        <h3 className="section-header-allcaps">Contact Us</h3>
      </div>
    </div>
    <div className="row s-contact__content">
      <div className="column large-7 medium-12">
        <h4 className="huge-text">
          Have a new project in mind? Lets collaborate and build something awesome.
          Lets turn that idea to an even greater product :
        </h4>
      </div>
      <div className="column large-4 medium-12">
        <div className="row contact-infos">
          <div className="column large-12 medium-6 tab-12">
            <div className="contact-block">
              <h5 className="contact-block__header">
                Email
              </h5>
              <p className="contact-block__content">
                <a className="mailtoui" href="mailto:amrendra.rathore@successive.tech">amrendra.rathore@successive.tech</a>
              </p>
            </div>
            {' '}
            {/* end contact-block */}
          </div>
          <div className="column large-12 medium-6 tab-12">
            <div className="contact-block">
              <h5 className="contact-block__header">
                Phone
              </h5>
              <p className="contact-block__content">
                <a href="tel:+91776083821">+91-7760838211</a>
              </p>
            </div>
            {' '}
            {/* end contact-block */}
          </div>
          <div className="column large-12">
            <a href="mailto:amrendra.rathore@successive.tech" className="mailtoui btn btn--primary h-full-width">Lets Talk</a>
          </div>
        </div>
        {' '}
        {/* end contact-infos */}
      </div>
    </div>
    {' '}
    {/* s-contact__content */}
  </section>
);

export default ContactUs;
