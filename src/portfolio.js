import React, { Component } from 'react';
import About from './about';
import Projects from './projects';
import Footer from './footer';
import Header from './header';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <Header />
        <About />
        <hr />
        <Projects />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default Portfolio;