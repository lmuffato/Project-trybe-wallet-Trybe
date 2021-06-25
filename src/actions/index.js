const LOGIN = 'LOGIN';
const ADD_EXPENSE = 'ADD_EXPENSE';
const DELETE_EXPENSE = 'DELETE_EXPENSE';

const userLogin = (email) => ({
  type: LOGIN,
  payload: {
    email,
  },
});

const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

export {
  LOGIN,
  userLogin,
  ADD_EXPENSE,
  addExpense,
  DELETE_EXPENSE,
  deleteExpense,
};
