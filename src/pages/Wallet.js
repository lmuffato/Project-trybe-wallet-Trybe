import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import WalletHeader from '../components/WalletHeader';
import AddExpenseForm from '../components/AddExpenseForm';
import WalletTable from '../components/WalletTable';
import { getCurrenciesThunk } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    return (
      <>
        <WalletHeader />
        <AddExpenseForm />
        <h2>TrybeWallet</h2>
        <WalletTable />
      </>
    );
  }
}

Wallet.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getCurrenciesThunk()),
});

export default connect(null, mapDispatchToProps)(Wallet);
