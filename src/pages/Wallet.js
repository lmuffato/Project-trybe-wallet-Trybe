import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import { getDataThunk } from '../actions';

import Header from '../components/Header';
import FormDespesas from '../components/FormDespesas';
import Table from '../components/Table';

class Wallet extends Component {
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
    return (
      <>
        <Header />
        <FormDespesas />
        <Table />
      </>
    );
  }
}

/*
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});
*/

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getDataThunk()),
});

Wallet.propTypes = {
  getData: func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
