import React from 'react';
import { useSelector } from 'react-redux';
import AddExpenseForm from '../components/AddExpenseForm';
import EditExpenseForm from '../components/EditExpenseForm';
import ExpenseTable from '../components/ExpenseTable';
import Header from '../components/Header';

const Wallet = () => {
  const globalState = useSelector((store) => store);
  const { editMode } = globalState.wallet;

  return (
    <div>
      <Header />
      {editMode ? <EditExpenseForm /> : <AddExpenseForm />}
      <ExpenseTable />
    </div>
  );
};

export default Wallet;
