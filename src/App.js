import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from './pages/index';
import Wallet from './pages/Wallet'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
      </Switch>
    );
  }
}

export default App;
