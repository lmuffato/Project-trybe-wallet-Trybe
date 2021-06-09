import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={ Login } />
      <Route path="/wallet" component={ Wallet } />
    </Switch>
  );
}

export default Routes;
