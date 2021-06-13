import currencyAPI from '../services/api';

export const USER_LOGIN_SUCESS = 'USER_LOGIN_SUCESS';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';
export const LOAD_CURRENCIES = 'LOAD_CURRENCIES';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const ADD_EDIT_EXPENSE = 'ADD_EDIT_EXPENSE';

export const userLoginSucess = (email, password) => ({
  type: USER_LOGIN_SUCESS,
  payload: { email, password },
});

export const walletLoading = () => ({
  type: LOAD_CURRENCIES,
});

export const walletAddCurrencie = (payload) => ({
  type: ADD_CURRENCIES,
  payload,
});
export const walletAddExpense = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});
export const walletRemoveExpense = (payload) => ({
  type: REMOVE_EXPENSES,
  payload,
});
export const walletEditExpense = (payload) => ({
  type: EDIT_EXPENSE,
  payload,
});
export const walletAddEditExpense = (payload) => ({
  type: ADD_EDIT_EXPENSE,
  payload,
});
export const currencyAPIThunk = () => async (dispatch) => {
  dispatch(walletLoading());

  const currencies = await currencyAPI();
  const currenciesTypes = Object.keys(currencies);
  const someCurrencies = currenciesTypes.filter((currencie) => currencie !== 'USDT');
  dispatch(walletAddCurrencie({
    currencies: someCurrencies,
  }));
};
