import React from 'react';
import { connect } from 'react-redux';
import { string, shape } from 'prop-types';

class Header extends React.Component {
  // constructor() {
  //   super();
  // }
  // componentDidMount() {
  //   expensesThunk();
  // }

  render() {
    const { email, expenses } = this.props;
    const totalValue = expenses.reduce((acc, curr) => {
      console.log(Number(curr.value));
      const { currency } = curr;
      return acc + (Number(curr.value) * curr.exchangeRates[currency].ask);
    }, 0);
    console.log(expenses);
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ totalValue.toFixed(2) }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: string.isRequired,
  expenses: shape.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
