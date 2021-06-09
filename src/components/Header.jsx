import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      totalValue: 0,

    };
    this.totalValue = this.totalValue.bind(this);
  }

  totalValue() {
    const { totalEx } = this.props;
    const { totalValue } = this.state;
    if (totalEx.length === 0) {
      return totalValue;
    }
  }

  render() {
    const { email, exRate } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          Email:
          {(email)}
        </p>
        <p data-testid="total-field">
          Total:
          {this.totalValue()}
        </p>
        <p data-testid="header-currency-field">
          Taxa:
          {exRate[0]}
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalEx: state.wallet.expenses,
  exRate: state.wallet.currencies,
});

export default connect(mapStateToProps)(Header);
