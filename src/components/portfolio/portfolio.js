import React from 'react';

const Portfolio = () => (
  <section id="portfolio" className="s-portfolio target-section">
    <div className="row s-portfolio__header">
      <div className="column large-12">
        <a href="http://www.daaki.com">
          <h3>My Latest Creation : Daaki</h3>
        </a>
      </div>
    </div>
    <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
      <div className="column folio-item">
        <img src="./public/images/portfolio/daaki.png" alt="" />
      </div>
      {' '}
      {/* end folio-item */}
      <div className="column folio-item">
        <a href="#modal-02" className="folio-item__thumb">
          <img
            src="images/portfolio/lamp.jpg"
            srcSet="images/portfolio/lamp.jpg 1x,
                           images/portfolio/lamp@2x.jpg 2x"
            alt=""
          />
        </a>
      </div>
      {' '}
      {/* end folio-item */}
    </div>
    {' '}
    {/* end folio-list */}
  </section>
);

export default Portfolio;
