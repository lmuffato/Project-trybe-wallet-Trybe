// Coloque aqui suas actions
export const LOGIN = 'LOGIN';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const NEW_EXPENSE = 'NEW_EXPENSE';

export const newExpense = (payload) => ({
  type: NEW_EXPENSE,
  payload,
});
