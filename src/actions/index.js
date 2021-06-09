export const newEmail = (email) => ({
  type: 'NEW_EMAIL',
  payload: email,
});

export const addExpense = (obj) => ({
  type: 'NEW_EXPENSE',
  payload: obj,
});

export const removeExpense = (index) => ({
  type: 'REMOVE_EXPENSE',
  payload: index,
});
