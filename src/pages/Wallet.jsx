import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';
import { apiFetchThunk, walletTransaction } from '../actions';
import Expenses from '../components/Expenses';

class Wallet extends React.Component {
  componentDidMount() {
    const { addCurrency } = this.props;
    addCurrency();
  }

  render() {
    return (
      <div>
        <h2>TrybeWallet</h2>
        <Header />
        <ExpenseForm />
        <Expenses />
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCurrency: () => dispatch(apiFetchThunk()),
});

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

Wallet.propTypes = {
  addCurrency: propTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
