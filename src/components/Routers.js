import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

export default function Routers() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/carteira" component={ Wallet } />
    </Switch>
  );
}
