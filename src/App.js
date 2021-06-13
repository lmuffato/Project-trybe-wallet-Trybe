import React, { Component } from 'react';
import { Route } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </>
    );
  }
}

export default App;
