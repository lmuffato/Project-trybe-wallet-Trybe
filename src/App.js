import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={ Login } />
        <Route path="/wallet" component={ Wallet } />
      </>
    );
  }
}

export default App;
