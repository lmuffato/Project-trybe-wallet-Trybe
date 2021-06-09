// Coloque aqui suas actions
export const loginAction = (value) => ({
  type: 'LOGIN',
  value,
});

// export const disabled = () => ({
//   type: 'DISABLED',
// });

export const addExpensesAction = (state) => ({
  type: 'ADD_EXPENSES',
  state,
});
