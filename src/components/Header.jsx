import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import wallet from '../images/wallet.png';

class Header extends React.Component {
  getExpenses() {
    const { expenses } = this.props;
    const allValues = expenses.map((e) => Number(this.headerSum(e)));
    const totalValue = allValues.reduce((total, value) => total + value, 0);
    return totalValue;
  }

  headerSum({ currency, value, exchangeRates }) {
    const currInfo = Object.values(exchangeRates)
      .filter((curr) => curr.code === currency && curr.codein !== 'BRLT');
    return Number(currInfo[0].ask * value).toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <div>
          <img src={ wallet } alt="wallet" />
        </div>
        <div>
          <p data-testid="email-field">
            Email:
            { email }
          </p>
          <p data-testid="total-field">
            Despesa total:
            { this.getExpenses() }
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  getEmail: PropTypes.string,
  expenses: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps)(Header);
