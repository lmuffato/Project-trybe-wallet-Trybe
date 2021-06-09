import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Login } />
          <Route path="/carteira" component={ Wallet } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
