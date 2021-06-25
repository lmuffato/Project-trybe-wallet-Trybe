// export const loginAction = (value) => ({ type: 'LOGIN', value });
// export const userEmail = () => ({ type: 'USER_EMAIL' });

// export default { loginAction, userEmail };

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
