import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <section>
      <Switch>
        <Route path="/" component={ Login } />
      </Switch>
    </section>);
}

export default App;
