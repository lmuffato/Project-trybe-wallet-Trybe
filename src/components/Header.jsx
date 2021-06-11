import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import wallet from '../images/wallet.png';
import './Header.css';

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
      <header className="header-container">
        <div className="img-container">
          <img
            src={ wallet }
            alt="wallet"
            className="wallet-picture-header"
          />
          <h1>
            Projeto Trybe Wallet
          </h1>
        </div>
        <div className="show-info-container">
          <h2 data-testid="email-field">
            Email:
            <span className="info-field">
              { email }
            </span>
          </h2>
          <h2 data-testid="total-field">
            Despesa total:
            <span className="info-field">
              { this.getExpenses().toFixed(2) }
            </span>
          </h2>
          <h2 data-testid="header-currency-field">
            <span className="info-field">
              BRL
            </span>
          </h2>
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
