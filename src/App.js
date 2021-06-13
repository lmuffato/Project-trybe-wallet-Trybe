import React from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import getAPI from './getAPI';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    getAPI();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.email,
  Wallet: state.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  objApi: (recebeArray) => dispatch({ type: 'ADD_GASTO', data: recebeArray }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
