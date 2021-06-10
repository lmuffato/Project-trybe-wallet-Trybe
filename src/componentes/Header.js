import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.sumExpenses = this.sumExpenses.bind(this);
    this.choiceCurrency = this.choiceCurrency.bind(this);
  }

  sumExpenses() {
    let totalExpenses = 0;
    const { arrayExpenses } = this.props;
    if (arrayExpenses.length === 0) totalExpenses = 0;
    else totalExpenses = arrayExpenses.reduce((acc, cur) => acc + cur);
    // return totalExpenses;  aqui entre os gastos totais
    return 0;
  }

  choiceCurrency() {
    let currentCurrency = 'BRL';
    const { arrayCurrencys } = this.props;
    if (arrayCurrencys.length === 0) currentCurrency = 'BRL';
    /* suficiente para o requisito 5,
      mas deverá ser completado nos próximos requisitos */

    return currentCurrency;
  }

  render() {
    const { receiveLoginEmail } = this.props;
    return (
      <header>
        <div data-testid="email-field">{receiveLoginEmail}</div>
        <div data-testid="total-field">{ this.sumExpenses() }</div>

        {/* suficiente para o requisito 5, mas deverá ser
           completado nos próximos requisitos */}
        <div data-testid="header-currency-field">{this.choiceCurrency()}</div>

      </header>);
  }
}

Header.propTypes = {
  receiveLoginEmail: PropTypes.func.isRequired,
  arrayExpenses: PropTypes.func.isRequired,
  arrayCurrencys: PropTypes.func.isRequired,
};

export default Header;
