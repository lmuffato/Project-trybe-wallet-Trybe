import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import convertToMoney from '../../utils';

class Header extends React.Component {
  constructor() {
    super();
    this.recalculateTotal = this.recalculateTotal.bind(this);
  }

  recalculateTotal() {
    const { expenses } = this.props;
    return expenses.reduce((acc, { value, currency, exchangeRates }) => {
      acc += convertToMoney(value * exchangeRates[currency].ask);
      return acc;
    }, 0);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <h2 data-testid="email-field">
          {email}
        </h2>
        <h2 data-testid="total-field">
          {this.recalculateTotal()}
        </h2>
        <h2 data-testid="header-currency-field">
          BRL
        </h2>
      </header>
    );
  }
}

const mapStateToProps = (
  { user: { email }, wallet: { expenses } },
) => (
  { email, expenses }
);

Header.propTypes = {
  email: string,
}.isRequired;

export default connect(mapStateToProps)(Header);
