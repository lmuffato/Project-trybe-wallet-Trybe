import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
// import store from './store/index';

class App extends Component {
  render() {
    return (
      <>
        <h1>Trybe Wallet</h1>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/carteira" component={ Wallet } />
        </Switch>
      </>
    );
  }
}

export default App;
