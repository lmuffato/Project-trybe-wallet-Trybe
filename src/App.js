// 6 - Ubuntu Budgie (Budgie)

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import notFound from './pages/NotFound';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/trybe-wallet" component={ Wallet } />
      <Route path="*" component={ notFound } />
    </Switch>
  );
}

export default App;
