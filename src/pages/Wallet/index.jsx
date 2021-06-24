import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';

import { getCurrenciesThunk } from '../../actions';

import Header from './components/Header';
import Forms from './components/Forms';
import Table from './components/Table';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    return (
      <>
        <Header />
        <Forms />
        <Table />
      </>
    );
  }
}

Wallet.propTypes = {
  fetchData: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(getCurrenciesThunk()),
});

export default connect(null, mapDispatchToProps)(Wallet);
