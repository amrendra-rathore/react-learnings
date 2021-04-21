import React from 'react';

const Testimonials = () => (
  <section id="testimonials" className="s-testimonials target-section">
    <div className="s-testimonials__bg" />
    <div className="row s-testimonials__header">
      <div className="column large-12">
        <h3>Hear What My Clients Says</h3>
      </div>
    </div>
    <div className="row s-testimonials__content">
      <div className="column">
        <div className="swiper-container testimonial-slider">
          <div className="swiper-wrapper">
            <div className="testimonial-slider__slide swiper-slide">
              <div className="testimonial-slider__author">
                <img src="images/avatars/user-02.jpg" alt="Author" className="testimonial-slider__avatar" />
                <cite className="testimonial-slider__cite">
                  <strong>Tim Cook</strong>
                  <span>CEO, Apple</span>
                </cite>
              </div>
              <p>
                Molestiae
              </p>
            </div>
            {' '}
            {/* end testimonial-slider__slide */}
            <div className="testimonial-slider__slide swiper-slide">
              <div className="testimonial-slider__author">
                <img src="images/avatars/user-03.jpg" alt="Author" className="testimonial-slider__avatar" />
                <cite className="testimonial-slider__cite">
                  <strong>Sundar Pichai</strong>
                  <span>CEO, Google</span>
                </cite>
              </div>
              <p>
                Excepturi
              </p>
            </div>
            {' '}
            {/* end testimonial-slider__slide */}
            <div className="testimonial-slider__slide swiper-slide">
              <div className="testimonial-slider__author">
                <img src="images/avatars/user-04.jpg" alt="Author" className="testimonial-slider__avatar" />
                <cite className="testimonial-slider__cite">
                  <strong>Satya Nadella</strong>
                  <span>CEO, Microsoft</span>
                </cite>
              </div>
              <p>
                Repellat
              </p>
            </div>
            {' '}
            {/* end testimonial-slider__slide */}
            <div className="testimonial-slider__slide swiper-slide">
              <div className="testimonial-slider__author">
                <img src="images/avatars/user-05.jpg" alt="Author" className="testimonial-slider__avatar" />
                <cite className="testimonial-slider__cite">
                  <strong>Jeff Bezos</strong>
                  <span>CEO, Amazon</span>
                </cite>
              </div>
              <p>
                Nunc
              </p>
            </div>
            {' '}
            {/* end testimonial-slider__slide */}
          </div>
          {' '}
          {/* end testimonial slider swiper-wrapper */}
          <div className="swiper-pagination" />
        </div>
        {' '}
        {/* end swiper-container */}
      </div>
      {' '}
      {/* end column */}
    </div>
    {' '}
    {/* end row */}
  </section>
);

export default Testimonials;
