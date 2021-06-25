import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { emailLogado, expenses } = this.props;
    const arraySomar = [];
    expenses.map((expense) => {
      const typeCurrency = expense.currency;
      const exchange = expense.exchangeRates[typeCurrency];
      const subTotal = expense.value * exchange.ask;
      arraySomar.push(subTotal);
      return arraySomar;
    });
    const total = arraySomar.reduce((acc, num) => acc + parseFloat(num), 0).toFixed(2);
    // const totalFormated = total.toFixed(2);
    return (
      <div>
        <span data-testid="email-field">{ emailLogado.email }</span>
        <span data-testid="total-field">{ total }</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailLogado: state.user,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  emailLogado: Proptypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
