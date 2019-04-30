import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeIndexContainer from './home/home_index_container';

const App = () => (
  <div className="main-page">
  <div className="splash-image"></div>
    <h1 className="main-page-heading">Search for Homes in San Francisco, CA</h1>
    
    <Switch>
      <Route exact path="/" component={HomeIndexContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;