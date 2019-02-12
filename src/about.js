import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div className="about-me-container">
        <div className="about-me-content">
          <div className="doc-links">
            <img src="icons8-resume-30.png" alt="Resume" />
            <div className="resume"><Link className="resume" to="https://www.thomas-chun.com/resume" target="_blank" rel="noopener noreferrer">Resume</Link></div>
            <img src="icons8-linkedin-48.png" alt="LinkedIn" />
            <div className="linkedin"><a className="linkedin" href="https://www.linkedin.com/in/thomas-chun-99385a95/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
            <img src="icons8-github-48.png" alt="GitHub" />
            <div className="github"><a className="github" href="https://github.com/ThomasChun" target="_blank" rel="noopener noreferrer">GitHub</a></div>
            <img src="icons8-gmail-48.png" alt="Email" />
            <div className="email"><a className="email" href="mailto:tchun2055@gmail.com">Email</a></div>
          </div>
          <div className="about">
            {/* <img src="thomaschun.jpg" className="about-me-photo" alt="Thomas Chun" /> */}
            <p>
              I'm a Full Stack Web Developer currently living in Los Angeles, California. I started my professional career in education as a History teacher in Honolulu, Hawaii.
              My background in education instilled in a me a pursuit of life-long learning and professional development. I believe that there is an opportunity to grow in every moment, both
              professionally and as an individual.
        </p>
            <p>
              I decided to pursue a career change and learn how to
              turn my ideas for websites and apps into a reality by completing Thinkful's Engineering Immersion Program. I enjoy the challenge associated with coding an app or feature from the
              ground up while researching and learning new skills throughout the development process. In this profession, there are always new languages, frameworks, and libraries to learn and
              I'm dedicated to continuously building upon my existing knowledge and skills. Thinkful provided me with the opportunity to experience paired programming daily in addition to developing
              a full-stack capstone project in collaboration with three members of my cohort. I enjoy working on a team where members are goal driven and striving to deliver the best possible product.
          </p>
            <p>
              Outside of writing code, I enjoy spending my free time with friends and family. I was born and raised in Honolulu, Hawaii and enjoy eating fresh seafood and attending professional sporting 
              events. I'm a passionate sports fan and have fully immersed myself in the sports collectibles hobby. My sports collectibles hobby was one of the driving factors that first
              got me into web development. I taught myself basic coding in order to create a website to display my collection of autographs and memorabilia. As a result of that first website, web
              development quickly turned into an interest that I have decided to pursue full time as a career.
        </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;