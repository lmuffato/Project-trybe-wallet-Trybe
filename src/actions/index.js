import ACTIONS from '../constants/actions';

export const loginAction = (value) => ({ type: ACTIONS.LOGIN, value });
export const getExchangeRates = (data) => {
  if (data.USDT) {
    delete data.USDT;
  }
  return { type: ACTIONS.GET_EXCHANGE_RATES, data };
};
export const updateTotal = () => ({ type: ACTIONS.UPDATE_TOTAL });
export const dispatchNewExpense = (expense) => ({
  type: ACTIONS.ADD_EXPENSE,
  expense,
});
// export const addExpense = (expense) => async (dispatch) => {
//   await dispatch(dispatchNewExpense(expense));
//   updateTotal();
// };
export const dispatchRemoveExpense = (expenseId) => ({
  type: ACTIONS.REMOVE_EXPENSE,
  expenseId,
});
// export const removeExpense = (expense) => async (dispatch) => {
//   await dispatch(dispatchRemoveExpense(expense));
//   updateTotal();
// };
