import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route path="/">
        <Login />
      </Route>
      <Route path="/carteira">
        <Wallet />
      </Route>
    </Switch>
  );
}

export default App;
