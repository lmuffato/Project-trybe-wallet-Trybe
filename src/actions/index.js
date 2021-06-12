export const USER_DATA = 'USER_DATA';
export const ADD_EXPENSE = 'ADD_EXPENSE';

const login = (email, password) => ({
  type: USER_DATA,
  payload: {
    email,
    password,
  },
});

const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: {
    ...expense,
  },
});

export {
  login,
  addExpense,
};
