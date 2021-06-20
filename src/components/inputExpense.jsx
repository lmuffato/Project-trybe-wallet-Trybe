import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        Hello, TrybeWallet!
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/carteira" component={ Wallt } />
          <Route component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;
