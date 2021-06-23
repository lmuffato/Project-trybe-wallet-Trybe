import React from 'react';
import { bool, shape } from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

import styles from './styles.module.css';

const routes = [
  {
    path: '/',
    exact: true,
    component: Login,
  },
  {
    path: '/carteira',
    exact: true,
    component: Wallet,
  },
];

function Routes() {
  return (
    <main className={ styles.container }>
      <Switch>
        {routes.map((route, index) => (
          <Route key={ index } { ...route } />
        ))}
      </Switch>
    </main>
  );
}

Routes.propTypes = {
  wallet: shape({
    isLoading: bool.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(Routes);
