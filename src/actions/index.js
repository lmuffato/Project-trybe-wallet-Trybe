import fetchCurrencyApi from '../services/currencyApi';

export const USER_LOGIN = 'USER_LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const GET_CURRENCY = 'GET_CURRENCY';
export const TOTAL_UPDATE = 'TOTAL_UPDATE';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  payload: {
    email,
  },
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: {
    expense,
  },
});

const toCurrencyArray = (object) => Object.keys(object);

export const getCurrency = (currencies) => {
  const currenciesArray = toCurrencyArray(currencies);
  const currenciesFilter = currenciesArray.filter((currency) => currency !== 'USDT');
  return ({
    type: GET_CURRENCY,
    payload: {
      currency: currenciesFilter,
    },
  });
};

export const getCurrencyThunk = () => (dispatch) => {
  fetchCurrencyApi()
    .then((result) => {
      dispatch(getCurrency(result));
    });
};

export const calculateTotal = (value) => ({
  type: TOTAL_UPDATE,
  payload: {
    value,
  },
});
