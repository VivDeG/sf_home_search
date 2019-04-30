import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeIndexContainer from './home/home_index_container';

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={HomeIndexContainer} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;