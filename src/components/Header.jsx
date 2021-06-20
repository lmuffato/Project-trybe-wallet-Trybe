import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Heading4 from './Heading4';

class Header extends Component {
  getNumber(arr = [{ value: 0 }]) {
    const array = arr.map((item) => {
      const { currency } = item;
      return item.value * item.exchangeRates[currency].ask;
    });
    if (array.length > 0) {
      return array.reduce((acc, curr) => Number(acc) + Number(curr));
    }
    return 0;
  }

  render() {
    const { expenses } = this.props;
    const total = this.getNumber(expenses);
    const { email, coin } = this.props;
    return (
      <>
        <Heading4 dataTestid="email-field" text={ email } />
        <Heading4 dataTestid="total-field" text={ total > 0 ? total : 0 } />
        <Heading4 dataTestid="header-currency-field" text={ coin } />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string,
  expenseMount: PropTypes.string,
  coin: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
