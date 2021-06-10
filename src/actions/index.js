import fetchCurrencyApi from '../services/currencyApi';

export const USER_LOGIN = 'USER_LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const GET_CURRENCY = 'GET_CURRENCY';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
export const GET_CURRENCY_ERROR = 'GET_CURRENCY_ERROR';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  payload: {
    email,
  },
});

const toCurrencyArray = (object) => Object.keys(object);

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const getCurrency = () => ({
  type: GET_CURRENCY,
});

export const getCurrencySuccess = (currencies) => {
  const currenciesArray = toCurrencyArray(currencies);
  const currenciesFilter = currenciesArray.filter((currency) => currency !== 'USDT');
  return ({
    type: GET_CURRENCY_SUCCESS,
    payload: {
      currency: currenciesFilter,
    },
  });
};

export const getCurrencyError = (payload) => ({
  type: GET_CURRENCY_ERROR,
  payload,
});

export const getCurrencyThunk = () => (dispatch) => {
  dispatch(getCurrency());
  fetchCurrencyApi()
    .then((result) => {
      dispatch(getCurrencySuccess(result));
    });
};
