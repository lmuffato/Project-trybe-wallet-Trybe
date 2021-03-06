import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <div>
        Hello, TrybeWallet!
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/carteira" component={ Wallet } />
          <Route component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;
