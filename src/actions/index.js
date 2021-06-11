export const SAVE_USER_EMAIL = 'SAVE_USER_EMAIL';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const EDITED_EXPENSE = 'EDITED_EXPENSE';

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

export const fetchCurrencies = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  delete data.USDT;

  return data;
};

export const getCurrenciesCode = () => async (dispatch) => {
  dispatch(requestCurrencies());
  const currencies = await fetchCurrencies();
  dispatch(receiveCurrencies(Object.keys(currencies)));
};

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: id,
});

export const editExpense = (id) => ({
  type: EDIT_EXPENSE,
  payload: id,
});

export const editedExpense = (expense) => ({
  type: EDITED_EXPENSE,
  payload: expense,
});
