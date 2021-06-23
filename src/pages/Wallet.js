import React from 'react';
import ExpenseTag from '../components/ExpenseTag';
import PaymentMethod from '../components/PaymentMethod';
import ExchangeCurrency from '../components/ExchangeCurrency';
import ExpenseValue from '../components/ExpenseValue';
import ExpenseDescription from '../components/ExpenseDescription';
import AddExpenseButton from '../components/AddExpenseButton';
// import SumExpenses from '../components/SumExpenses';
import HeaderWallet from '../components/HeaderWallet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h1>TrybeWallet</h1>
        <header>
          <HeaderWallet />
          {/* <SumExpenses /> */}
          <ExpenseValue />
          <ExpenseDescription />
          <ExchangeCurrency />
          <PaymentMethod />
          <ExpenseTag />
          <AddExpenseButton />
        </header>
      </div>
    );
  }
}

export default Wallet;
