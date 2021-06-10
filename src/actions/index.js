export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const AGROUP_CURRENCIES = 'AGROUP_CURRENCIES';
export const SUM_EXPENSES = 'SUM_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const SUBTRACT_EXPENSES = 'SUBTRACT_EXPENSES';

export const login = (email) => ({ type: LOGIN, email });

export const addExpense = (expenses) => ({ type: ADD_EXPENSE, payload: [expenses] });

export const agroupCurrencies = (currencies) => ({
  type: AGROUP_CURRENCIES, payload: currencies });

export const sumExpenses = (value) => ({ type: SUM_EXPENSES, payload: value });

export const deleteExpense = (id) => ({ type: DELETE_EXPENSE, payload: id });

export const subtractExpenses = (value) => ({ type: SUBTRACT_EXPENSES, payload: value });
