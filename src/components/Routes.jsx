import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

function Routes() {
  return (
    <Switch>
      <Route path="/carteira" component={ Wallet } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default Routes;
