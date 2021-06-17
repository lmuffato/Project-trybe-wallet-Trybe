import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
// busca o array de objetos expenses, depois buscar as 3 infos
// por se tratar de um array com objetos, necessario percorer ele usando forEach
// pegando o currency escolhido pelo usuario, percorremos o objeto exchangeRates onde teremos
// a cotação da moeda (ask)
  totalExpended() {
    const { expensesAll } = this.props;
    let sum = 0;
    expensesAll.forEach((expense) => {
      sum += expense.value * expense.exchangeRates[expense.currency].ask;
    });
    return sum;
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <span data-testid="email-field">{`Email: ${email}`}</span>
        <span data-testid="total-field">{`Despesa Total: ${this.totalExpended()}`}</span>
        <span data-testid="header-currency-field">{`Moeda: ${'BRL'}`}</span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expensesAll: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
