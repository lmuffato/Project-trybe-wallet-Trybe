import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import '../styles/Header.css';

class Header extends React.Component {
  render() {
    const { userEmail, expenses } = this.props;
    const totalExpenses = expenses.map((expense) => {
      const {
        currency, exchangeRates, value,
      } = expense;
      const { ask } = exchangeRates[currency];
      const convertedValue = (value * ask).toFixed(2);
      return convertedValue;
    }).reduce((acc, curr) => {
      acc += Number(curr);
      return acc;
    }, 0);

    return (
      <header className="header">
        <div>Wellcome to the TrybeWallet!</div>
        <section className="content">
          <p data-testid="email-field">
            Email:
            {userEmail}
          </p>
          <section className="expenses">
            <p data-testid="total-field">
              Despesa: R$
              {totalExpenses.toFixed(2)}
            </p>
            <p data-testid="header-currency-field">BRL</p>
          </section>
        </section>

      </header>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { totalExpense, expenses } }) => ({
  userEmail: email,
  totalExpense,
  expenses,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  userEmail: propTypes.string,
}.isRequired;
