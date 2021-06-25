import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.calculateTotal = this.calculateTotal.bind(this);
  }

  // Função abaixo criada usando por referência o código do colega de turma Derik Andrade. [https://github.com/tryber/sd-010-a-project-trybewallet/pull/120/commits/1f2adf61e88310b88b06ce67b25e654c7e793ea8]

  calculateTotal() {
    const { expenses } = this.props;
    const convertedExpenses = expenses.map((expense) => {
      const { currency, value } = expense;
      const currencyRate = expense.exchangeRates[currency].ask;
      const convertedValue = parseFloat(value) * parseFloat(currencyRate);
      return convertedValue;
    });
    const expensesTotal = (convertedExpenses
      .reduce((acc, curr) => acc + parseFloat(curr), 0)).toFixed(2);
    return expensesTotal;
  }

  render() {
    const { user } = this.props;
    return (
      <header>
        <span data-testid="email-field">{user}</span>
        <span data-testid="total-field">{`R$ ${this.calculateTotal()} `}</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const MapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(MapStateToProps)(Header);
