import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
import EditForm from '../components/EditForm';
import Table from '../components/Table';
import './wallet.css';

class Wallet extends React.Component {
  handleValue() {
    const { expenses } = this.props;
    const allValues = expenses.map((expense) => {
      const coin = expense.currency;
      const rate = expense.exchangeRates[coin].ask;
      const myValue = parseFloat(expense.value) * parseFloat(rate);
      return myValue;
    });
    const valuesSum = allValues.reduce(((acc, cur) => acc + parseFloat(cur)), 0);
    return valuesSum;
  }

  render() {
    const { userEmail, showEdit } = this.props;
    const total = parseFloat(this.handleValue()).toFixed(2);
    return (
      <>
        <header className="wallet-header">
          <h1>My Wallet</h1>
          <p>
            Email:
            <span data-testid="email-field">
              {userEmail}
            </span>
          </p>
          <p>
            Total:
            <span data-testid="total-field">
              {total}
            </span>
            <span data-testid="header-currency-field">
              BRL
            </span>
          </p>
        </header>
        {
          showEdit
            ? <EditForm />
            : <Form />
        }
        <br />
        <Table />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  userEmail: state.user.email,
  showEdit: state.wallet.showEdit,
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  showEdit: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
