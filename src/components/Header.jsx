/* Gostaria de salientar que esse requisito 8 só foi possível a sua realização graças ao Divino Rafael Medeiros que em seus ultimos suspiros de exaustão de uma semana, numa sexta feira, aliás, sábado, 00:25 e o Vinicius Rodrigues, com o se bigodinho e seus conhecimentos! eu ainda preciso estudar MUUUUUUUUITO pra fazer esse requisito 8 sozinho! Vamos juntos e juntas!  */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  render() {
    const { displayEmail, totalExpense } = this.props;
    let total = 0;
    totalExpense.forEach(({ value, exchangeRates, currency }) => {
      total += value * exchangeRates[currency].ask;
      console.log(currency);
    });

    return (
      <div>
        <header data-testid="email-field">{ displayEmail }</header>
        <h5 data-testid="total-field">{ total }</h5>
        <h5 data-testid="header-currency-field">BRL</h5>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  displayEmail: state.user.email,
  totalExpense: state.wallet.expenses,
});

Header.propTypes = {
  displayEmail: propTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
