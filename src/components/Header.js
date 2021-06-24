import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.handleTotalField = this.handleTotalField.bind(this);
    this.findCurrencyValue = this.findCurrencyValue.bind(this);
  }

  findCurrencyValue(curre = 'USD', index = 0) {
    const { wallet: { expenses } } = this.props;
    const myRates = expenses[index].exchangeRates;
    const findRate = Object.entries(myRates).find((ele) => ele[0] === curre);
    const value = parseFloat(findRate[1].ask);
    return value;
  }

  handleTotalField() {
    const { wallet: { expenses } } = this.props;
    const totalValue = expenses.reduce((acc, curr) => acc
    + parseFloat(curr.value) * this.findCurrencyValue(curr.currency), 0);
    return totalValue;
  }

  render() {
    const { user: { email } } = this.props;
    return (
      <header className="Header">
        <p data-testid="email-field">
          Email:
          { email }
        </p>
        <div className="Header-Currency">
          <p>Despesa Total: </p>
          <p data-testid="total-field">{ this.handleTotalField() }</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}
const mapStateToProps = (state) => {
  const { user, wallet } = state;
  return { user, wallet };
};

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.string),
    currencies: PropTypes.arrayOf(PropTypes.string),
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, null)(Header);
