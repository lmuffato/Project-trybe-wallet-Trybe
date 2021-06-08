import React from 'react';
import { Route, Switch } from 'react-router';
import Login from '../pages/Login';

function Routers() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default Routers;
