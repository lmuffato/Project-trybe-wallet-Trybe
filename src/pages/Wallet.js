import React from 'react';
import ExpenseTag from '../components/ExpenseTag';
import PaymentMethod from '../components/PaymentMethod';
import ExchangeCurrency from '../components/ExchangeCurrency';
import ExpenseValue from '../components/ExpenseValue';
import ExpenseDescription from '../components/ExpenseDescription';
import AddExpenseButton from '../components/AddExpenseButton';
import HeaderWallet from '../components/HeaderWallet';
import TableWallet from '../components/TableWallet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h1>TrybeWallet</h1>
        <header>
          <HeaderWallet />
          <ExpenseValue />
          <ExpenseDescription />
          <ExchangeCurrency />
          <PaymentMethod />
          <ExpenseTag />
          <AddExpenseButton />
          <TableWallet />
        </header>
      </div>
    );
  }
}

export default Wallet;
