import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-links">
          <img src="icons8-resume-24.png" alt="Resume"/>
          <div className="footer-resume"><Link className="footer-resume" to="/resume" target="_blank" rel="noopener noreferrer">Resume</Link></div>
          <img src="icons8-linkedin-24.png" alt="LinkedIn"/>
          <div className="footer-linkedin"><a className="footer-linkedin" href="https://www.linkedin.com/in/thomas-chun-99385a95/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
          <img src="icons8-github-24.png" alt="GitHub"/>
          <div className="footer-github"><a className="footer-github" href="https://github.com/ThomasChun" target="_blank" rel="noopener noreferrer">GitHub</a></div>
          <img src="icons8-gmail-24.png" alt="Email"/>
          <div className="footer-email"><a className="footer-email"href="mailto:tchun2055@gmail.com">Email</a></div>
        </div>
        <p>© 2019 Thomas Chun</p>
      </div>
    );
  }
}

export default Footer;