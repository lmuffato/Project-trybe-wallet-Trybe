import { ADD_EXPENSE, GET_CURRENCY, REMOVE_EXPENSE, USER_LOGIN } from './actionTypes';

export const userLogin = (userEmail) => ({
  type: USER_LOGIN,
  payload: {
    user: {
      email: userEmail,
    },
  },
});

export const getCurrency = (data) => ({
  type: GET_CURRENCY,
  payload: {
    data,
  },
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: {
    expense,
  },
});

export const removeExpense = (expense) => ({
  type: REMOVE_EXPENSE,
  payload: {
    expense,
  },
});

export const fetchCurrency = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const currencyArray = Object.keys(data);
  const filteredCurrencies = currencyArray.filter((currency) => currency !== 'USDT');
  dispatch(getCurrency(filteredCurrencies));
};
