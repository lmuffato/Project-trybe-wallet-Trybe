import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Wallet from './pages/Wallet';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ Login } />
        <Route path="/wallet" component={ Wallet } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
