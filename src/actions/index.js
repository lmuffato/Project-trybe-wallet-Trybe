export const newEmail = (email) => ({
  type: 'NEW_EMAIL',
  payload: email,
});

export const addExpense = (obj) => ({
  type: 'NEW_EXPENSE',
  payload: obj,
});
