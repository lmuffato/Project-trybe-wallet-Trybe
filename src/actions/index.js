// Coloque aqui suas actions

const userLogin = (email) => ({
  type: 'LOGIN',
  user: {
    email,
  },
});

export default userLogin;

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  wallet: {
    expense,
  },
});
