import { getCurrenciesAPI } from '../services/moedasAPI';

export const USER_LOGIN = 'USER_LOGIN';

export const userEmail = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';

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

  getCurrenciesAPI()
    .then((response) => {
      const currencyFilter = Object.keys(response).filter(
        (currency) => currency !== 'USDT',
      );
      dispatch(getCurrenciesSuccess(currencyFilter));
    })
    .catch(() => { getCurrenciesError(); });
};
