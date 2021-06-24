import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from '../component/ExpenseForm';

class Wallet extends React.Component {
  sumExpenses() {
    const { totalExpenses } = this.props;
    console.log(totalExpenses);
    let sum = 0;
    totalExpenses.forEach((expense) => {
      sum += expense.value * expense.exchangeRates[expense.currency].ask;
    });
    return sum.toFixed(2);
  }

  render() {
    const { takeEmail } = this.props;
    return (
      <div>
        <header data-testid="email-field">
          <p className="p-header">
            E-mail:
            {takeEmail}
          </p>
          <p data-testid="header-currency-field" className="p-header">
            BRL
          </p>
          <p data-testid="total-field" className="p-header">
            {this.sumExpenses()}
          </p>
        </header>
        <ExpenseForm className="div-form" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  takeEmail: state.user.email,
  totalExpenses: state.wallet.expenses,
});
Wallet.propTypes = {
  takeEmail: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
