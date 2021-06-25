import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  totalSpends() {
    const { expenses } = this.props;
    let sum = 0;
    console.log(expenses);
    expenses.forEach((expense) => {
      sum += expense.value * expense.exchangeRates[expense.currency].ask;
    });
    return sum;
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <p> Usuário:</p>
          <p data-testid="email-field">
            { email }
          </p>
          <p data-testid="total-field">
            { this.totalSpends() }
          </p>
          <p data-testid="header-currency-field"> BRL </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps)(Header);
