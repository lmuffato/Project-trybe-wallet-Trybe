export const TYPE_EMAIL = 'TYPE_EMAIL';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const userAction = (payload) => ({
  type: 'TYPE_EMAIL',
  payload,
});

export const addExpense = (state) => ({
  type: 'ADD_EXPENSE',
  payload: state,
});
