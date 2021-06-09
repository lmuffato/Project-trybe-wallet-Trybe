import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      Hello, TrybeWallet!
      <Route exact path="/" component={ Login } />
      <Route path="/carteira" component={ Wallet } />
    </div>
  );
}

export default App;
