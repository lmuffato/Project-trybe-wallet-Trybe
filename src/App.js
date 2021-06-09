import React from 'react';
import { Switch, Route } from 'react-router';
import Login from './pages/Login';
import wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ wallet } />
      </Switch>
    );
  }
}

export default App;
