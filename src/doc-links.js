

import React, { Component } from 'react';

class DocLinks extends Component {
  render() {
    return (
      <div>
        <div className="basic-info">
        <h2>Thomas Chun</h2>
        <p>Full Stack Web Developer</p>
        </div>
        <div className="doc-links">
          <div className="resume">Resume</div>
          <div className="linkedin">LinkedIn</div>
          <div className="github">GitHub</div>
          <div className="email">Email</div>
        </div>
      </div>
    );
  }
}

export default DocLinks;