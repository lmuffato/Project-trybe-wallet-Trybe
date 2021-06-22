import React from 'react';
import ExpenseTag from '../components/ExpenseTag';
import PaymentMethod from '../components/PaymentMethod';
import ExchangeCurrency from '../components/ExchangeCurrency';
import ExpenseValue from '../components/ExpenseValue';
import ExpenseDescription from '../components/ExpenseDescription';
import AddExpenseButton from '../components/AddExpenseButton';
import SumExpenses from '../components/SumExpenses';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h1>TrybeWallet</h1>
        <header>
          <section data-testid="email-field"><h3>Email</h3></section>
          <section data-testid="total-field"><h3>despesa total</h3></section>
          <section data-testid="header-currency-field"><h3>câmbio</h3></section>
          <form>
            <SumExpenses />
            <ExpenseValue />
            <ExpenseDescription />
            <ExchangeCurrency />
            <PaymentMethod />
            <ExpenseTag />
            <AddExpenseButton />
          </form>
        </header>
      </div>
    );
  }
}

export default Wallet;
