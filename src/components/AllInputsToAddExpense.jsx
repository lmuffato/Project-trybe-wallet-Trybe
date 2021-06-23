import React, { Component } from 'react';
import ExpenseTag from './InputsToAddExpense/ExpenseTag';
import PaymentMethod from './InputsToAddExpense/PaymentMethod';
import ExchangeCurrency from './InputsToAddExpense/ExchangeCurrency';
import ExpenseValue from './InputsToAddExpense/ExpenseValue';
import ExpenseDescription from './InputsToAddExpense/ExpenseDescription';
import AddExpenseButton from './InputsToAddExpense/AddExpenseButton';

class AllInputsToAddExpense extends Component {
  render() {
    return (
      <div>
        <ExpenseValue />
        <ExpenseDescription />
        <ExchangeCurrency />
        <PaymentMethod />
        <ExpenseTag />
        <AddExpenseButton />
      </div>
    );
  }
}

export default AllInputsToAddExpense;
