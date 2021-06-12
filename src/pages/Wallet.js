import React from 'react';
import { string, number } from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/form';
import { fetchCoins } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  render() {
    const { expenses, email } = this.props;
    let total = 0;
    expenses.forEach(({ value, exchangeRates, currency }) => {
      console.log(exchangeRates, currency);
      total += value * exchangeRates[currency].ask;
    });
    // total = expenses.reduce((acc, { value, exchangeRates, currency }) => acc + value * exchangeRates[currency].ask, 0);

    return (
      <div>
        <header>
          <span data-testid="email-field">
            Email:
            {email}
          </span>
          <span data-testid="total-field">
            Dispesa Total: R$
            {total}
            <span data-testid="header-currency-field">
              BRL
            </span>
          </span>
        </header>
        <Form />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(fetchCoins()),
});

Wallet.propTypes = {
  email: string,
  total: number,
  cambio: string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
