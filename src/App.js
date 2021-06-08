import React from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <section>
      <Switch>
        <Route path="/" component={ Login } />
      </Switch>
    </section>);
}

export default App;
