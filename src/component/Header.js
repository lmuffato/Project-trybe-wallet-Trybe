import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();

    this.sumValues = this.sumValues.bind(this);
  }

  sumValues() {
    const { expensesState } = this.props;
    expensesState.reduce((a, b) => console.log(parseFloat(a.value + b.value)));
    // arrayValues.reduce((a, b) => a + b);
  }

  render() {
    const { emailState, expensesState } = this.props;

    // console.log(sumValues());

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
          {validation() ? 0 : this.sumValues() }
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
