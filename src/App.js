import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route path="/carteira">
        <Wallet />
      </Route>
      {/* <Route path="/users">
        <Users />
      </Route> */}
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
