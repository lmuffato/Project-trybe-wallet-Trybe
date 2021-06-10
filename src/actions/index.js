export const SAVE_USER_EMAIL = 'SAVE_USER_EMAIL';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const saveUserEmail = (email) => ({
  type: SAVE_USER_EMAIL,
  payload: email,
});

const requestCurrencies = () => ({
  type: REQUEST_CURRENCY,
});

const receiveCurrencies = (currency) => ({
  type: RECEIVE_CURRENCY,
  payload: currency,
});

export const fetchCurrency = () => async (dispatch) => {
  dispatch(requestCurrencies());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  delete data.USDT;

  const currencies = Object.values(data);

  return dispatch(receiveCurrencies(currencies));
};

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});
