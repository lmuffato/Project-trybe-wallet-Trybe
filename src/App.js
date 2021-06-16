import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      {/* A rota para esta página deve ser ‘/’. */}
      <Route exact path="/" component={ Login } />
      {/* A rota para esta página deve ser /carteira */}
      <Route path="/carteira" component={ Wallet } />
    </Switch>
  );
}

export default App;
