import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { userLogin, expenses } = this.props;
    const valueCot = [];

    expenses.map((expense) => {
      const exchange = expense.exchangeRates[expense.currency].ask;
      const real = expense.value * exchange;
      valueCot.push(real);
      return valueCot;
    });
    const totalGastos = valueCot
      .reduce((acc, crr) => acc + parseFloat(crr), 0).toFixed(2);

    return (
      <>
        <span data-testid="email-field">
          Email:
          {' '}
          {userLogin.email}
        </span>
        <span data-testid="total-field">
          Gastos:
          {' '}
          0
          {totalGastos}
        </span>
        <span data-testid="header-currency-field">
          Câmbio:
          {' '}
          BRL
        </span>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.user,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  userLogin: PropTypes.string,
}.isRequired;
