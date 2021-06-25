import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.addExpense = this.addExpense.bind(this);
  }

  addExpense() {
    let total = 0;
    const { expenses } = this.props;
    expenses.forEach((expense) => {
      const { value, currency, exchangeRates } = expense;
      console.log(exchangeRates);
      total += parseFloat(exchangeRates[currency].ask) * value;
    });
    return total.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <div>
          <div data-testid="email-field" className="email">
            Email:
            { ` ${email}` }
          </div>
          <div data-testid="total-field" className="expense">
            Despesa Total:
            { ` ${this.addExpense()}` }
          </div>
          <div data-testid="header-currency-field" className="currency">
            BRL
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
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps, null)(Header);
