import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';

function App() {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </section>
  );
}

export default App;
