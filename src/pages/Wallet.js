import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from '../component/ExpenseForm';
// import TableExpenses from '../component/TableExpenses';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      sum: 0,
    };
    this.sumExpenses = this.sumExpenses.bind(this);
  }

  sumExpenses() {
    const { totalExpenses } = this.props;
    console.log(totalExpenses);
    let sum = 0;
    totalExpenses.forEach((expense) => {
      sum += expense.value * expense.exchangeRates[expense.currency].ask;
    });
    /*     this.setState({
      sum,
    }); */
    return sum;
  }

  render() {
    const { takeEmail } = this.props;
    return (
      <div>
        <header data-testid="email-field">
          { takeEmail }
        </header>
        <div data-testid="header-currency-field">
          BRL
        </div>
        <div data-testid="total-field">
          {this.sumExpenses()}
        </div>
        <ExpenseForm />
        {/*         <TableExpenses /> */}
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
