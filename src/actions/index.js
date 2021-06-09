// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addUser = (email) => ({
  type: ADD_USER,
  user: email,
});

export const addEpenses = (arrayExpenses) => ({
  type: ADD_EXPENSE,
  expenses: arrayExpenses,
});
