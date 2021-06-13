import ACTIONS from '../constants/actions';

export const loginAction = (value) => ({ type: ACTIONS.LOGIN, value });
export const getCurrencies = (currencies) => {
  if (currencies.USDT) {
    delete currencies.USDT;
  }
  return { type: ACTIONS.GET_CURRENCIES,
    currencies };
};
