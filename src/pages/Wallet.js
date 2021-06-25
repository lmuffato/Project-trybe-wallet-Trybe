import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpensesThunk as addExpenseAction,
  deleteExpense as deleteExpenseAction } from '../actions';

import WalletForm from '../components/WalletForm';
import WalletTable from '../components/WalletTable';

class Wallet extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      tag: '',
      method: '',
      currency: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.calcTotalSpent = this.calcTotalSpent.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { wallet: { currentId } } = this.props;
    const { addExpense } = this.props;
    addExpense({
      id: currentId,
      ...this.state,
    });
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleDelete(expense) {
    const { deleteExpense } = this.props;
    deleteExpense(expense);
  }

  calcTotalSpent() {
    const { wallet: { expenses } } = this.props;
    const total = expenses.reduce(
      (acc, cur) => parseFloat(cur.value * cur.exchangeRates[cur.currency].ask) + acc, 0,
    );
    return total;
  }

  render() {
    const { userEmail, wallet: { expenses } } = this.props;
    const {
      value,
      description,
      tag,
      method,
      currency,
    } = this.state;
    const walletFormProps = {
      onSubmit: this.handleSubmit,
      onChange: this.handleChange,
      value,
      description,
      tag,
      method,
      currency,
    };

    return (
      <div className="wallet">
        <header>
          <p data-testid="email-field">
            {userEmail.email}
          </p>
          <p data-testid="total-field">
            {this.calcTotalSpent()}
          </p>
          <legend data-testid="header-currency-field">
            BRL
          </legend>
        </header>
        <WalletForm
          { ...walletFormProps }
        />
        <WalletTable
          expenses={ expenses }
          onDelete={ this.handleDelete }
        />
      </div>
    );
  }
}

Wallet.propTypes = {
  addExpense: PropTypes.func.isRequired,
  deleteExpense: PropTypes.func.isRequired,
  wallet: PropTypes.shape({
    expenses: PropTypes.objectOf(PropTypes.string),
    totalSpent: PropTypes.number,
    currentId: PropTypes.number,
  }).isRequired,
  userEmail: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user,
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (e) => dispatch(addExpenseAction(e)),
  deleteExpense: (e) => dispatch(deleteExpenseAction(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
