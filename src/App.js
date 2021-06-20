import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import wallet from './pages/Wallet';

function App() {
  return (
    <switch>
      <Route exact path="/" component={ Login } />
      <Route path="/carteira" component={ wallet } />
    </switch>
  );
}

export default App;
