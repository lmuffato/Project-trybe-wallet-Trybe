import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  handleSum() {
    const { expenses } = this.props;
    let sum = 0;
    expenses.forEach((expense) => {
      sum += (expense.value * expense.exchangeRates[expense.currency].ask);
    });
    return sum;
  }

  render() {
    const { sendEmail } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          { sendEmail }
        </p>
        <p data-testid="total-field">
          Valor:
          {this.handleSum()}
        </p>
        <p data-testid="header-currency-field">Câmbio utilizado:BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sendEmail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  sendEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
