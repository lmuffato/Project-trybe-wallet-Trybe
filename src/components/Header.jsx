import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.sumExpensives = this.sumExpensives.bind(this);
  }

  sumExpensives() {
    const { expenses } = this.props;
    const expensesMap = expenses.map(({ currency, value, exchangeRates }) => {
      const actualCurrency = exchangeRates[currency];
      const sumAll = Number(value) * Number(actualCurrency.ask);
      return sumAll;
    });
    return expensesMap.reduce((total, expense) => total + expense, 0).toFixed(2);
  }

  // Função SumExpensives feito com ajuda do plantão.

  render() {
    const { email } = this.props;
    return (
      <header className="mx-5 my-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <div>
              <img src="https://i.ibb.co/x3rgM44/Group-1-1.png" alt="Group-1-1" border="0" />
            </div>
          </div>
          <div className="border border-1 rounded p-3">
            <div>
              <p data-testid="email-field">
                {`User: ${!email ? '' : email}`}
              </p>
            </div>
            <span data-testid="total-field" className="">
              <strong>R$</strong>
              { this.sumExpensives() }
            </span>
            <span data-testid="header-currency-field">BRL</span>
          </div>
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
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
