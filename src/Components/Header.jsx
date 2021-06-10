import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.sumConvertedValues = this.sumConvertedValues.bind(this);
  }

  sumConvertedValues() {
    const { expenses } = this.props;
    let total = 0;
    expenses.forEach((expense) => {
      total += expense.value * expense.exchangeRates[expense.currency].ask;
    });
    return parseFloat(total.toFixed(2));
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          E-mail:
          { email }
        </p>
        <p data-testid="total-field">{ this.sumConvertedValues() }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: string,
}.isRequired;

export default connect(mapStateToProps)(Header);