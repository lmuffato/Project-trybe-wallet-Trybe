import React, { Component } from 'react';
import { Route } from 'react-router';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <>
        <div>Hello, TrybeWallet!</div>
        <Route exact path="/" component={ Login } />
      </>
    );
  }
}

export default App;
