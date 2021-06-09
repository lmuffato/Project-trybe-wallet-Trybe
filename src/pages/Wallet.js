import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { walletAddCurrencie, walletAddExpense } from '../actions';
import ExpendForm from '../components/ExpendForm';

class Wallet extends React.Component {
  render() {
    const { userAddExpense, userAddCurrencie } = this.props;
    const { email, isLogged } = this.props;
    const expend = 0;
    return (
      <>
        <header>
          <h2>Trybe Wallet</h2>
          <p data-testid="email-field">{email}</p>
          <p>Despesas Totais: </p>
          <p data-testid="total-field">{expend}</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <ExpendForm />
      </>
    );
  }
}

const secondMapDispatchToProps = (dispatch) => ({
  userAddExpense: () => dispatch(walletAddExpense()),
  userAddCurrencie: () => dispatch(walletAddCurrencie()),
});

const secondMapStateToProps = ({ wallet: { currencies, expenses },
  user: { email, isLogged } }) => ({
    currencies,
    expenses,
    email,
    isLogged,
  });

Wallet.propTypes = {
  userAddExpense: PropTypes.func.isRequired,
  userAddCurrencie: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default connect(secondMapStateToProps, secondMapDispatchToProps)(Wallet);
