import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <div className="resume-container">
        <div className="resume-content">
          <section className="name-contact-info">
            <div className="resume-header-name">Thomas Alan Chun</div>
            <div>Los Angeles, California</div>
            <div>tchun2055@gmail.com</div>
            <div>(808)-429-9613</div>
            <div className="resume-links-container">
            <div className="resume-links">
              <span className="resume-portfolio">Portfolio</span>
              <span className="resume-github">GitHub</span>
              <span className="resume-linkedin">LinkedIn</span>
            </div>
            </div>
          </section>

          <section>
            <h2>Summary</h2>
            <p>Full stack developer candidate skilled in writing clean code that adheres to web development
              best practices. I am committed to my professional development as a programmer by constantly seeking
              to add to my existing skill set by learning new languages, libraries, frameworks and technologies.
              I am a strong team player that is reliable and able to adapt quickly within a fast paced environment.</p>
          </section>

          <section>
            <h2>Skills</h2>
            <div><b>Front-End:</b> Javascript, React, Redux, Enzyme, jQuery, HTML5, CSS3</div>
            <div><b>Back-End:</b> Node.js, MongoDB, Mocha & Chai, Passport, REST API</div>
            <div><b>Dev Tools:</b> Git, GitHub, Chrome Dev Tools, Heroku, Travis CI</div>
          </section>

          <section>
            <h2>Recent Projects</h2>
            <p>
              The Friend Zone (GitHub • Live Demo): The Friend Zone was a full-stack capstone project completed
              in collaboration with three members of my Thinkful Cohort. The Friend Zone is an online community
              for people who are seeking platonic friendships and want to connect with others through a comfortable
              and relaxed online community. The Friend Zone offers suggested friendships based on personality types
              allowing users to chat live. Personality polls are available for users to complete and gain insight
              into how to become better friends. Additional features include local meetups and community forums where
              users can discuss topics of interests or plan in person events. Tech Stack: React, Redux, React Router,
              Redux Form, Moment.js, react-widgets, Socket.io, Enzyme, Node.js, Express, MongoDB, Mongoose, Passport +
              JSON Web Tokens, Eventbrite API, Google Geocoding API, Mocha & Chai.
            </p>

            <p>
              Spaced Latency (GitHub • Live Demo): Learn the latency numbers every programmer should know using a
              spaced-repetition algorithm. See the questions that you get wrong more frequently allowing users to
              practice the content they are having difficulty committing to memory. The Spaced Latency App also
              features graphs and charts for users to track their lifetime and per session data for right and wrong
              answers. This feedback allows users to pinpoint the questions they need to spend more time and and
              track progress across sessions. Tech Stack: React, Redux, React Router, Redux Forms, Chart.js,
              react-chartjs-2, Moment.js, Node.js, MongoDB, Express, Passport + JSON Web Tokens.
            </p>

            <p>
              The Restaurant App (GitHub • Live Demo): Ever have trouble deciding where to eat? The restaurant
              app makes deciding where to eat easy and exciting. The Restaurant App allows users to create
              collections with restaurants that can be randomized at a click of a button. The randomize button
              randomly generates a suggested restaurant that you should eat at from your list of restaurants from
              your currently selected collection. Spend less time deciding and more time eating! Tech Stack:
              React, Redux, Enzyme, Node.js, MongoDB, Yelp! Fusion API, Mocha & Chai.
            </p>
          </section>

          <section>
            <h2>Education</h2>
            <div><b>University of Oregon • Eugene, Oregon</b></div>
            <div>Bachelor of Science:  Geography</div>
            <div>Minor: Business</div>
            <div>June 13th, 2011</div>
            <br />
            <div><b>Hawaii Pacific University • Honolulu, Hawaii</b></div>
            <div>Masters of Education: Secondary Education</div>
            <div>December 18th, 2013</div>
            <br />
            <div><b>Thinkful • Los Angeles, CA</b></div>
            <div>Full Stack Engineering Immersion: Cohort 25</div>
            <div>February 15th, 2019</div>
          </section>

          <section>
            <h2>Professional Work Experience</h2>
            <div><b>Los Angeles Unified School District • Los Angeles, CA</b></div>
            <div>Substitue Teacher</div>
            <div>March 2018 - September 2018</div>
            <br/>
            <div><b>Owner of Royal Summit Cards • Los Angeles, CA</b></div>
            <div>eCommerce Sports Collectibles Business</div>
            <div>April 2016 – May 2018</div>
            <br/>
            <div><b>Central Middle School  •  Honolulu, Hawaii</b></div>
            <div>Teacher - Social Studies Grade 7</div>
            <div>October 2014 – March 2015</div>
            <br/>
            <div><b>Kaimuki Middle School  •  Honolulu, Hawaii</b></div>
            <div>Teacher’s Assistant – Summer Session</div>
            <div>Summer 2007</div>
          </section>
        </div>
      </div>
    );
  }
}

export default Resume;