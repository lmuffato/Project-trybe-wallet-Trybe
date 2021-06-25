import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import Header from '../components/Header';
import { apiWalletThunk } from '../actions';
import TableExpenses from '../components/TableExpenses';

class Wallet extends React.Component {
  componentDidMount() {
    const { addWalletCurrency } = this.props;
    addWalletCurrency();
  }

  render() {
    return (
      <>
        <Header />
        <Form />
        <TableExpenses />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addWalletCurrency: () => dispatch(apiWalletThunk()),
});

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

Wallet.propTypes = {
  addWalletCurrency: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
