import getCurrencies from '../services/getApi';

export const USER_LOGIN = 'USER_LOGIN';
export const WALLET = 'WALLET';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_FAILED = 'GET_CURRENCIES_FAILED';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const userLoginAction = (payload) => ({ type: USER_LOGIN, payload });
export const walletAction = (payload) => ({ type: WALLET, payload });
export const getCurrenciesAPI = () => ({ type: GET_CURRENCIES });
export const getCurrenciesAPISuccess = (payload) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});
export const getCurrenciesAPIFailed = (payload) => ({
  type: GET_CURRENCIES_FAILED,
  payload,
});
export const addExpenses = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const currenciesThunk = () => async (dispatch) => {
  dispatch(getCurrenciesAPI());
  try {
    const request = await getCurrencies();
    dispatch(getCurrenciesAPISuccess(request));
  } catch (error) {
    dispatch(getCurrenciesAPIFailed(error));
  }
};
