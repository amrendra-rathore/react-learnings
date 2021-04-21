import React from 'react';

const Resume = () => (
  <section id="resume" className="s-resume target-section">
    <div className="row s-resume__section">
      <div className="column large-3 tab-12">
        <h3 className="section-header-allcaps">Career</h3>
      </div>
      <div className="column large-9 tab-12">
        <div className="resume-block">
          <div className="resume-block__header">
            <h4 className="h3">Successive Technologies, Pune</h4>
            <p className="resume-block__header-meta">
              <span>Full Stack Developer</span>
              <span className="resume-block__header-date">
                April 2021 - Present
              </span>
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae
            aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam
            nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
          </p>
        </div>
        {' '}
        {/* end resume-block */}
        <div className="resume-block">
          <div className="resume-block__header">
            <h4 className="h3">Hewlett Packard Enterprise</h4>
            <p className="resume-block__header-meta">
              <span>Server Engineer (Technical Solutions Consultant)</span>
              <span className="resume-block__header-date">
                April 2019 - April 2021
              </span>
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae
            aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam
            nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
          </p>
        </div>
        {' '}
        {/* end resume-block */}
      </div>
    </div>
    {' '}
    {/* s-resume__section */}
    <div className="row s-resume__section">
      <div className="column large-3 tab-12">
        <h3 className="section-header-allcaps">Education</h3>
      </div>
      <div className="column large-9 tab-12">
        <div className="resume-block">
          <div className="resume-block__header">
            <h4 className="h3">P.E.S. Institute of Technology, Bangalore</h4>
            <p className="resume-block__header-meta">
              <span>Bachelor of Engineering</span>
              <span className="resume-block__header-date">
                August 2018
              </span>
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae
            aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam
            nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
          </p>
        </div>
        {' '}
        {/* end resume-block */}
        <div className="resume-block">
          <div className="resume-block__header">
            <h4 className="h3">Birla Public School, Pilani (Rajasthan)</h4>
            <p className="resume-block__header-meta">
              <span>Senior Secondary High School</span>
              <span className="resume-block__header-date">
                March 2012
              </span>
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae
            aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam
            nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
          </p>
        </div>
        {' '}
        {/* end resume-block */}
      </div>
    </div>
    {' '}
    {/* s-resume__section */}
    <div className="row s-resume__section">
      <div className="column large-3 tab-12">
        <h3 className="section-header-allcaps">Skills</h3>
      </div>
      <div className="column large-9 tab-12">
        <div className="resume-block">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae
            aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam
            nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
          </p>
          <ul className="skill-bars-fat">
            <li>
              <div className="progress percent85" />
              <strong>HTML</strong>
            </li>
            <li>
              <div className="progress percent85" />
              <strong>CSS</strong>
            </li>
            <li>
              <div className="progress percent65" />
              <strong>Javascript</strong>
            </li>
            <li>
              <div className="progress percent50" />
              <strong>Figma</strong>
            </li>
            <li>
              <div className="progress percent45" />
              <strong>Reactjs</strong>
            </li>
            <li>
              <div className="progress percent40" />
              <strong>Nodejs</strong>
            </li>
          </ul>
        </div>
        {' '}
        {/* end resume-block */}
      </div>
    </div>
    {' '}
    {/* s-resume__section */}
  </section>
);

export default Resume;
