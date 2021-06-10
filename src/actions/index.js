export const newEmail = (email) => ({
  type: 'NEW_EMAIL',
  payload: email,
});

export const addExpense = (obj) => ({
  type: 'NEW_EXPENSE',
  payload: obj,
});

export const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  payload: id,
});

export const showHideEdit = (bool, id) => ({
  type: 'SHOW_HIDE_EDIT',
  payload: bool,
  editId: id,
});
