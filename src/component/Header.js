import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  // constructor() {
  //   super();

  //   this.sumValues = this.sumValues.bind(this);
  // }

  // sumValues() {
  //   const { expensesState } = this.props;
  //   expensesState.reduce((a, b) => {
  //     const corrency = b.exchangeRates[b.currencie].ask;
  //     a += parseFloat(b.value) * parseFloat(corrency);
  //     return a;
  //   }, 0);
  // }

  render() {
    const { emailState, expensesState } = this.props;

    const validation = () => {
      if (expensesState.length === 0) return true;
      return false;
    };

    return (
      <header>
        <p data-testid="email-field">
          Email:
          { emailState }
        </p>
        <p data-testid="total-field">
          Despesa total:
          {validation() ? 0 : expensesState.reduce((a, b) => {
            const corrency = b.exchangeRates[b.currency].ask;
            a += parseFloat(b.value) * parseFloat(corrency);
            return a;
          }, 0).toFixed(2)}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  emailState: PropTypes.stringnumber,
  expensesState: PropTypes.array,
}.isRequerid;

const mapStateProps = (state) => ({
  emailState: state.user.email,
  expensesState: state.wallet.expenses,
});

export default connect(mapStateProps, null)(Header);
