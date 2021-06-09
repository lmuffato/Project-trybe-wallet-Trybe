import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';

class Rotas extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={ Login } />
        </Switch>
        <div />
      </>
    );
  }
}

export default Rotas;
