import React from 'react';
import { Route, Switch } from 'react-router';
import Form from './componentes/form';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
        <Form />
      </Switch>
    );
  }
}
export default App;
