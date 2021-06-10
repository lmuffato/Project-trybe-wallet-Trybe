import fetchCurrencies from '../services/requestApi';

export const LOGIN = 'LOGIN';
export const AGROUP_CURRENCIES = 'AGROUP_CURRENCIES';

export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';

export const login = (email) => ({ type: LOGIN, email });

export const agroupCurrencies = (currencies) => ({
  type: AGROUP_CURRENCIES, payload: currencies });

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

export const getCurrenciesThunk = () => (dispatch) => {
  dispatch(getCurrencies());

  fetchCurrencies()
    .then((response) => {
      const currencyValue = Object.values(response);
      dispatch(getCurrenciesSuccess(currencyValue));
    });
};
