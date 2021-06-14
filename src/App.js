import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      {/* A rota para esta página deve ser ‘/’. */}
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default App;
