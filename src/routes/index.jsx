import React from 'react';
import { bool, shape } from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { FiHome, FiUsers } from 'react-icons/fi';

import Loading from '../components/Loading';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';
// import NotFound from '../pages/NotFound';

import { Container, NavBar, NavIcon } from './styles';

const routes = [
  {
    path: '/wallet',
    exact: true,
    component: Wallet,
  },
];

function Routes({ user: { isLoading, isAuth } }) {
  if (!isAuth) return <Login />;

  if (isLoading) return <Loading />;

  return (
    <Container>
      <Switch>
        {routes.map((route, index) => (
          <Route key={ index } { ...route } />
        ))}
      </Switch>

      <NavBar>
        <NavIcon exact to="/">
          <FiHome size="2rem" />
          <span>Home</span>
        </NavIcon>

        <NavIcon to="/followers">
          <FiUsers size="2rem" />
          <span>Followers</span>
        </NavIcon>

        <NavIcon to="/following">
          <FiUsers size="2rem" />
          <span>Following</span>
        </NavIcon>
      </NavBar>
    </Container>
  );
}

Routes.propTypes = {
  user: shape({
    isLoading: bool.isRequired,
    isAuth: bool.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(Routes);
