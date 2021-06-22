import React from 'react';
import { Redirect } from 'react-router-dom';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';

import { getCurrenciesThunk } from '../../actions';

import Loading from '../../components/Loading';
import Header from './components/Header';
import Forms from './components/Forms';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { isAuth, isLoading } = this.props;

    // if (!isAuth) return <Redirect push to="/" />;

    if (isLoading) return <Loading />;

    return (
      <>
        <Header />
        <Forms />
      </>
    );
  }
}

Wallet.propTypes = {
  fetchData: func.isRequired,
  isLoading: bool.isRequired,
  isAuth: bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(getCurrenciesThunk()),
});

const mapStateToProps = (state) => ({
  isLoading: state.wallet.isLoading,
  isAuth: state.user.isAuth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
