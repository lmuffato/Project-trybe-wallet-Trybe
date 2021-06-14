import ACTIONS from '../constants/actions';

export const loginAction = (value) => ({ type: ACTIONS.LOGIN, value });
export const getExchangeRates = (data) => {
  if (data.USDT) {
    delete data.USDT;
  }
  return { type: ACTIONS.GET_EXCHANGE_RATES, data };
};
export const addExpense = (expense) => ({ type: ACTIONS.ADD_EXPENSE, expense });
