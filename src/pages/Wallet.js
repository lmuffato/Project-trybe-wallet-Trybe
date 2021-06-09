import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { walletAddCurrencie, walletAddExpense } from '../actions';

class Wallet extends React.Component {
  render() {
    const { userAddExpense, userAddCurrencie } = this.props;
    const { email, isLogged } = this.props;
    return (
      <header>
        <h2>Trybe Wallet</h2>
        <p data-testid="email-field">{isLogged ? email : 'nenhum email'}</p>
        <p data-testid="total-field">Despesas Totais : (pegar despesas)</p>
        <p data-testid="header-currency-field">Pegar qual câmbio está sendo utilizado</p>
      </header>
    );
  }
}

const secondMapDispatchToProps = (dispatch) => ({
  userAddExpense: () => dispatch(walletAddExpense()),
  userAddCurrencie: () => dispatch(walletAddCurrencie()),
});

const secondMapStateToProps = ({ wallet: { currencies, expenses } },
  { user: { email, isLogged } }) => ({
  currencies,
  expenses,
  email,
  isLogged,
});
console.log(secondMapStateToProps.expenses);

Wallet.propTypes = {
  userAddExpense: PropTypes.func.isRequired,
  userAddCurrencie: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default connect(secondMapStateToProps, secondMapDispatchToProps)(Wallet);
