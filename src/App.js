import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <h1>Trybe Wallet</h1>
          <Switch>
            <Route exact path="/" component={ Login } />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
