import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <section className="the-friend-zone">
          <div className="the-friend-zone-content">
            <h3>The Friend Zone</h3>
            <p>The Friend Zone is an online community for people who are seeking platonic friendships
              and want to connect with others through a comfortable and relaxed online community. The Friend Zone
              offers suggested friendships based on personality types allowing users to chat live. Personality
              polls are availble for users to complete and gain insight into how to become better friends. Additional
              features include local meetups and community forums where users can discuss topics of interests or plan
              in person events.
            </p>
            <p>
              The Friend Zone was completed in collaboration with Alex Crowell, Logan Wang, and Mary Conley as part of
              our Thinkful Engineering Immersion Capstone Project. I was tasked with developing the Meetups feature of
              the app which allows users to create meetups for members of The Friend Zone to join. In addition to custom
              meetups, I integrated the use of the Eventbrite API and Google Geocoding API so users could search the
              Eventbrite API that returns upcoming events in their location that can be turned into Friend Zone Meetups.
            </p>
            <h4>Tech Stack</h4>
            <p className="tech-stack">
              React
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Redux
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />React Router
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Redux Form
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Moment.js
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />react-widgets
              <br />Socket.io
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Enzyme
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Node.js
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Express
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />MongoDB
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Mongoose
              <br />Passport + JSON Web Tokens
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Eventbrite API
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Google Geocoding API
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Chai
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Mocha
            </p>
            <h4>Project Links</h4>
            <div className="project-links">
              <img src="icons8-github-48.png" alt="GitHub" /><a href="https://github.com/the-friendzone-app/client" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              <img src="icons8-web-48.png" alt="website link"/><a href="https://the-friend-zone-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">The Friend Zone</a>
            </div>
            <img src="the-friend-zone.png" className="friend-zone-img" alt="friend zone" />
          </div>
        </section>

        <section className="spaced-latency">
          <div className="spaced-latency-content">
            <h3>Latency Numbers: Spaced Repetition</h3>
            <p>
              Learn the latency numbers every programmer should know using a spaced-repetition algorithm. See the
              questions that you get wrong more frequently allowing users to practice the content they are having
              difficulty commiting to memory. The Spaced Latency App also features graphs and charts for users to
              track their lifetime and per session data for right and wrong answers. This feedback allows users to
              pinpoint the questions they need to spend more time and and track progress across sessions.
            </p>
            <h4>Tech Stack</h4>
            <p className="tech-stack">
              React
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Redux
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />React Router
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Redux Forms
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Chart.js
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />react-chartjs-2
              <br />
              Moment.js
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Node.js
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />MongoDB
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Express
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Passport + JSON Web Tokens
            </p>
            <h4>Project Links</h4>
            <div className="project-links">
              <img src="icons8-github-48.png" alt="GitHub" /><a href="https://github.com/thinkful-ei25/spaced-repetition-arun-thomas" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              <img src="icons8-web-48.png" alt="website link"/><a href="https://spaced-latency.herokuapp.com/" target="_blank" rel="noopener noreferrer">Spaced Latency</a>
            </div>
            <img src="spaced-latency.png" className="spaced-latency-img" alt="Spaced Latency" />
          </div>
        </section>

        <section className="the-restaurant-app">
          <div className="the-restaurant-app-content">
            <h3>The Restaurant App</h3>
            <p>
              Ever have trouble deciding where to eat? The restaurant app makes deciding where to eat easy and exciting.
              The Restaurant App allows users to create collections with restaurants that can be randomized at a click
              of a button. The randomize button randomly generates a suggested restaurant that you should eat at from
              your list of restaurants from your currently selected collection. Spend less time deciding and more time
              eating!
            </p>
            <p>
              The restaurant app integrates the Yelp Fusion API to provide users with the ability to make search requests
              that return restaurants from the Yelp Fusion Database. In the search for a restaurant section, enter any
              search term in the search field. For example you can search for terms as broad as 'food' or be as specific
              as searching for a restaurant by name such as 'Howlin' Ray's'. After entering a search term, users are
              provided with the option of entering a city for location. The search will then make the request and return
              results based on the location you've provided. The final search option is selecting the state in which you
              would like to search for restaurants. Select one of the fifty states from the dropdown box and click on
              search to submit your request!
            </p>
            <h4>Tech Stack</h4>
            <p className="tech-stack">
              React
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Redux
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Enzyme
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Node.js
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />MongoDB
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Yelp! Fusion API
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Chai
              <img src="icons8-rhombus-48.png" className="rhombus-img" alt="Rhombus" />Mocha
            </p>
            <h4>Project Links</h4>
            <div className="project-links">
            <img src="icons8-github-48.png" alt="GitHub" /><a href="https://github.com/ThomasChun/restaurant-app-client" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            <img src="icons8-web-48.png" alt="website link"/><a href="https://thomas-restaurant-app-client.herokuapp.com/" target="_blank" rel="noopener noreferrer">The Restaurant App</a>
            </div>
            <img src="restaurant-app.png" className="restaurant-app-img" alt="The Restaurant App" />
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;