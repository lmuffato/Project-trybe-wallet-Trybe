import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Header extends React.Component {
  render() {
    const { user, wallet } = this.props;
    console.log(wallet.expenses);
    const validationValue = () => {
      if (wallet.expenses.length === 0) {
        return true;
      }
      return false;
    };

    return (
      <div>
        <header>
          <p data-testid="email-field">{user.email}</p>
          <p data-testid="total-field">
            { validationValue() ? 0 : wallet.expenses.reduce((acumulador, expense) => {
              const cambio = expense.exchangeRates[expense.currency].ask;
              acumulador += parseFloat(cambio) * parseFloat(expense.value);
              return acumulador;
            }, 0).toFixed(2) }
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: {
    email: state.user.email,
  },
  wallet: {
    expenses: state.wallet.expenses,
  },
});

export default connect(mapStateToProps)(Header);
Header.propTypes = {
  user: PropTypes.string,
  email: PropTypes.string,
}.isRiquered;
