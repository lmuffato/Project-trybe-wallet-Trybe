import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  handleSum() {
    const { expenses } = this.props;
    const Sum = expenses.reduce((acc, cur) => {
      const { value, currency, exchangeRates } = cur;
      const { ask } = Object.values(exchangeRates).find(({ code }) => code === currency);
      return acc + (value * ask);
    }, 0);
    return Sum;
  }

  render() {
    const { emailGot } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          Olá,
          { emailGot }
        </span>
        <span data-testid="total-field">
          Despesa Total: R$
          { this.handleSum() }
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailGot: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  exchangeRates: state.wallet.exchangeRates,
});

Header.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  emailGot: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
