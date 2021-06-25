const LOGIN = 'LOGIN';
const ADD_EXPENSE = 'ADD_EXPENSE';

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

export {
  LOGIN,
  userLogin,
  ADD_EXPENSE,
  addExpense,
};
