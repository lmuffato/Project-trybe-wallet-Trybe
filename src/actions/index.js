import ACTIONS from '../constants/actions';

export const loginAction = (value) => ({ type: ACTIONS.LOGIN, value });
export const getExchangeRates = (data) => {
  if (data.USDT) {
    delete data.USDT;
  }
  return { type: ACTIONS.GET_EXCHANGE_RATES, data };
};
export const dispatchNewExpense = (expense) => ({
  type: ACTIONS.ADD_EXPENSE,
  expense,
});
export const dispatchRemoveExpense = (expenseId) => ({
  type: ACTIONS.REMOVE_EXPENSE,
  expenseId,
});
export const defineEditing = (editing) => ({
  type: ACTIONS.DEFINE_EDITING,
  editing,
});
export const setExpenseToEdit = (expense) => ({
  type: ACTIONS.SET_EXPENSE_TO_EDIT,
  expense,
});
export const editExpense = (expenseKey) => ({
  type: ACTIONS.EDIT_EXPENSE,
  expenseKey,
});
export const updateExpenses = (expenses) => ({
  type: ACTIONS.UPDATE_EXPENSES,
  expenses,
});
