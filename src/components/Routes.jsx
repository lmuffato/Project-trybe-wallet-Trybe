import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

function Routes() {
  return (
    <Switch>
      <Route path="/wallet" component={ Wallet } />
      <Route exactpath="/" component={ Login } />
    </Switch>
  );
}

export default Routes;
