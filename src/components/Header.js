import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  getTotalExpenses() {
    const { expenses } = this.props;
    let total = 0;
    let valueSelected = 0;
    let finalValue = 0;
    expenses.forEach((expense) => {
      valueSelected = Number(expense.exchangeRates[expense.currency].ask);
      finalValue = expense.value * Number(valueSelected);
      total += finalValue;
    });
    return Number(total).toFixed(2);
  }

  render() {
    const { user } = this.props;
    return (
      <header>
        <div className="logo">
          LOGO
        </div>
        <div className="email">
          <h4>Email: </h4>
          <p data-testid="email-field">{user}</p>
        </div>
        <div className="total">
          <h4>Total de despesas: R$</h4>
          <span
            data-testid="total-field"
          >
            {this.getTotalExpenses()}
          </span>
          <p data-testid="header-currency-field">BRL</p>
        </div>

      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  expenses: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
