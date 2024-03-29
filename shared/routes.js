import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Import pages
import Landing from './pages/landing/async';
import Error404 from './pages/not-found';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Landing} exact />
      <Route component={Error404} />
    </Switch>
  );
}

export default Routes;
