import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import store from './store';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Provider store={ store }>
      <Switch>
        <Route exact path="/carteira" component={ Wallet } />
        <Route path="/" component={ Login } />
      </Switch>
    </Provider>
  );
}

export default App;
