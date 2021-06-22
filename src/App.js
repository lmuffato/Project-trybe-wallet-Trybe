import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      {/* <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route> */}
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
