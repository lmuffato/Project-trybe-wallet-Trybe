import React from 'react';
import { Switch, Route } from 'react-router-dom';
import login from './pages/Login';
import wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ login } />
        <Route path="/carteira" component={ wallet } />
      </Switch>
    );
  }
}

export default App;
