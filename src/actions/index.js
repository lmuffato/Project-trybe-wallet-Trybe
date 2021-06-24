// Coloque aqui suas actions
export const saveEmail = (email) => ({
  type: 'SAVE_EMAIL',
  payload: { email },
});

export const saveExpense = (expense) => ({
  type: 'SAVE_EXPENSE',
  payload: {
    expense,
  },
});

export const delExpense = (expense) => ({
  type: 'DEL_EXPENSE',
  payload: {
    expense,
  },
});
