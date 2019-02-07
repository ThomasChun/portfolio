import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Portfolio from './portfolio';
import Resume from './resume';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </div>
    );
  }
}

export default Main;