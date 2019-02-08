import React, { Component } from 'react';
import About from './about';
import Projects from './projects';
import Footer from './footer';
import Header from './header';

class Portfolio extends Component {
  render() {

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
      } else {
        document.getElementById("topBtn").style.display = "none";
      }
    }

    function topFunction() {
      console.log('clicked');
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

    return (
      <div className="portfolio">
        <Header />
        <About />
        <hr />
        <Projects />
        <hr />
        <Footer />
        <button onClick={() => topFunction()} id="topBtn" title="back to top"><img src="icons8-scroll-up-48.png" className="up-arrow" alt="back to top"/></button>
      </div>
    );
  }
}

export default Portfolio;