import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { userMail, expenses } = this.props;
    const totalValue = expenses.reduce((acc, curr) => {
      const { currency } = curr;
      return acc + (Number(curr.value) * curr.exchangeRates[currency].ask);
    }, 0); // retorna o acumulador, transformando em numero, iniciando o id em 0.

    return (
      <div>
        <header>
          <h1 data-testid="email-field">
            { userMail }
          </h1>
          <h3 data-testid="total-field">{ totalValue.toFixed(2) }</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ // recebe o estado como props
  userMail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userMail: propTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
