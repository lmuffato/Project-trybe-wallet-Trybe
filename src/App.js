import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/carteira" component={ Wallet } />
        <Route exact path="/" component={ Login } />
      </div>);
  }
}

export default App;
