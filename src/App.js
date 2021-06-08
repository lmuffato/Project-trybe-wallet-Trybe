import React from 'react';
import { Route, Switch } from 'react-router';

import Login from './pages/Login';
import Wallet from './pages/Wallet';

import './styles/globals.css';

function App() {
  return (
    <Switch>
      <Route path="/carteira">
        <Wallet />
      </Route>

      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
