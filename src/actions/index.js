import fetchCurrencies from '../services/fetchCurrencies';

export const LOGIN_DATA = 'LOGIN_DATA';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';

export const submitUser = (email, password) => ({
  type: LOGIN_DATA,
  payload: {
    email,
    password,
  },
});

export const getCurrencies = () => ({
  type: GET_CURRENCIES,
});

export const getCurrenciesSuccess = (payload) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});

export const getCurrenciesError = (payload) => ({
  type: GET_CURRENCIES_ERROR,
  payload,
});

export function getCurrenciesThunk() {
  return async (dispatch) => {
    dispatch(getCurrencies());
    const currencies = await fetchCurrencies();
    dispatch(getCurrenciesSuccess(currencies));
  };
}
