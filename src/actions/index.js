import apiFetch from '../services/apiFetch';

export const USER = 'USER';
export const WALLET = 'WALLET';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const user = (payload) => ({
  type: USER,
  payload,
});

export const wallet = (payload) => ({
  type: WALLET,
  payload,
});

export const walletCurrency = (payload) => ({
  type: ADD_CURRENCIES,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const apiFetchThunk = () => (dispatch) => {
  apiFetch()
    .then((response) => {
      dispatch(walletCurrency({
        currencies: response,
      }));
    });
};
