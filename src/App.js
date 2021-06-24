import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={ Login } exact />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    );
  }
}

export default App;
