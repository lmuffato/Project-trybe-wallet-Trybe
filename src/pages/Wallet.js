import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/form';
import { currenciesRequestThunk } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();

    this.reduceValues = this.reduceValues.bind(this);
  }

  componentDidMount() {
    const { requestCurrencies } = this.props;
    requestCurrencies();
  }

  reduceValues() {
    const { expenses } = this.props;
    let totalValue = 0;
    expenses
      .forEach((expense) => {
        totalValue += Number(expense.value)
        * Number(expense.exchangeRates[expense.currency].ask);
      });
    const valueFixed = totalValue.toFixed(2);
    return valueFixed;
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <>
        <header>
          <p data-testid="email-field">{email}</p>
          {expenses.length === 0 ? <p data-testid="total-field">0</p>
            : <p data-testid="total-field">{this.reduceValues()}</p>}
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <main>
          <Form />
        </main>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestCurrencies: () => dispatch(currenciesRequestThunk()),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  requestCurrencies: PropTypes.func.isRequired,
};
