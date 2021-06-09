// Coloque aqui suas actions
import { ADD_USER, ADD_EXPENSE } from './actionsTypes';

export const addUser = (email) => ({
  type: ADD_USER,
  user: email,
});

export const addExpense = (arrayExpenses) => ({
  type: ADD_EXPENSE,
  expenses: arrayExpenses,
});
