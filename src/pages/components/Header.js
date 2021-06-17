import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './CSS/header.css';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <header className="header">
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">
          Despesas Totais: R$
          { (expenses === undefined) ? 0 : expenses.reduce((itemA, itemB) => {
            const exchange = itemB.exchangeRates[itemB.currency].ask;
            itemA += parseFloat(itemB.value) * parseFloat(exchange);
            return itemA;
          }, 0).toFixed(2) }
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToPros = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToPros)(Header);
