import fetchCurrency from '../services/api';

export const LOGIN = 'LOGIN';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';

export const getCurrenciesSuccess = (payload) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});

export const getCurrenciesError = (payload) => ({
  type: GET_CURRENCIES_ERROR,
  payload,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  try {
    const currencies = await fetchCurrency();
    dispatch(getCurrenciesSuccess(currencies));
  } catch (error) {
    dispatch(getCurrenciesError(error));
  }
};
