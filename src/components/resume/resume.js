import React from 'react';

const Resume = () => (
  <section id="resume" className="s-resume target-section">
    <div className="row s-resume__section">
      <div className="column large-3 tab-12">
        <h3 className="section-header-allcaps">Career</h3>
      </div>
      <div className="column large-9 tab-12">
        <div className="resume-block" style={{ textAlign: 'left' }}>
          <div className="resume-block__header">
            <h4 className="h3">Successive Technologies, Pune</h4>
            <p className="resume-block__header-meta">
              <span>Full Stack Developer</span>
              <span className="resume-block__header-date">
                April 2021 - Present
              </span>
            </p>
          </div>
          <p style={{ textAlign: 'justify' }}>
            Currently getting trained on Node.js, MongoDB, React.js and
            other frontend or backend JS framework.
          </p>
        </div>
        {' '}
        {/* end resume-block */}
        <div className="resume-block">
          <div className="resume-block__header" style={{ textAlign: 'left' }}>
            <h4 className="h3">Hewlett Packard Enterprise</h4>
            <p className="resume-block__header-meta">
              <span>Server Engineer (Technical Solutions Consultant)</span>
              <span className="resume-block__header-date">
                April 2019 - April 2021
              </span>
            </p>
          </div>
          <ul style={{ textAlign: 'left' }}>
            <li>
              {' '}
              Installing, configuring and Managing VMware ESXi , vCenter
              and vSphere with DoD STIG implementation (security lockouts, VIBs, updates).
            </li>
            <li>
              {' '}
              Installing Drivers, Firmware, BIOS on repair server hardware on HPE Server’s.
            </li>
            <li>
              Maintaining and testing processes related to business continuity.
              Follow Vendors and VMware best practices.
            </li>
            <li>
              {' '}
              Security Hardening and Monitoring of VM&apos;s & ESXi servers
              (CPU, Memory, Disk, Network Utilization) for Security Compliance.
            </li>
            <li> Patching and Upgrading ESXi via ssh and using upgrade Manager.</li>
            <li>
              {' '}
              Performed Operating system Installation, Software installation on
              servers through remote connections via RDP.
              {' '}
            </li>
          </ul>
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
        <div className="resume-block" style={{ textAlign: 'left' }}>
          <div className="resume-block__header">
            <h4 className="h3">P.E.S. Institute of Technology, Bangalore</h4>
            <p className="resume-block__header-meta">
              <span>Bachelor of Engineering</span>
              <span className="resume-block__header-date">
                August 2018
              </span>
            </p>
          </div>
          <p style={{ textAlign: 'left' }}>
            Completed Bachelors of Engineering in the field of Information Science.
            <br />
            Presented an IEEE Paper on Blockchain
            <br />
            Created a project on Graph manipulation.
          </p>
        </div>
        {' '}
        {/* end resume-block */}
        <div className="resume-block" style={{ textAlign: 'left' }}>
          <div className="resume-block__header">
            <h4 className="h3">Birla Public School, Pilani (Rajasthan)</h4>
            <p className="resume-block__header-meta">
              <span>Senior Secondary High School</span>
              <span className="resume-block__header-date">
                March 2012
              </span>
            </p>
          </div>
          <p style={{ textAlign: 'left' }}>
            <ul>
              <li>
                Won Silver Medal in State level Under-19 Yoga Competition,
                Organised by IPSC.
              </li>
              <li>
                Represented IPSC Under-19 Yoga Team at National Yoga Competition 2012
                Organised by SGFI(School Games Federation India), at Chatrasal stadium, New Delhi.
              </li>
              <li>
                Cleared CBSE All India Senior School Certificate Examination
                (12th Boards Exam) from one of the most prestegious schools of India.
              </li>
            </ul>
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
          <p style={{ textAlign: 'justify' }}>
            {' '}
            Below I have listed the indicators with which you can quickly understand
            what I am strong at and what is weak.
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
              <div className="progress percent65" />
              <strong>Solidity</strong>
            </li>
            <li>
              <div className="progress percent50" />
              <strong>Reactjs</strong>
            </li>
            <li>
              <div className="progress percent40" />
              <strong>Nodejs</strong>
            </li>
            <li>
              <div className="progress percent80" />
              <strong>Blockchain</strong>
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
