import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import FormDespesas from '../components/FormDespesas';
import { getDataThunk } from '../actions';

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

export default connect(null, mapDispatchToProps)(Wallet);
