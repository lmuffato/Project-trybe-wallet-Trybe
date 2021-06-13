import fetchCurrencies from '../services/currenciesApi';

export const LOGIN_USER = 'LOGIN_USER';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DEL_EXPENSE = 'DEL_EXPENSE';
export const SAVE_EDIT_EXPENSE = 'SAVE_EDIT_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';

export const logInUser = (email) => ({
  type: LOGIN_USER,
  payload: email,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const deleteExpense = (id) => ({
  type: DEL_EXPENSE,
  payload: id,
});

export const saveEditExpense = (expense) => ({
  type: SAVE_EDIT_EXPENSE,
  payload: expense,
});

export const editExpense = (expense, index) => ({
  type: EDIT_EXPENSE,
  payload: {
    expense,
    index,
  },
});

export const getCurrencySuccess = (currencies) => ({
  type: GET_CURRENCY_SUCCESS,
  payload: currencies,
});

export const getCurrencies = () => (dispatch) => {
  fetchCurrencies()
    .then((currencies) => dispatch(getCurrencySuccess(Object.keys(currencies))));
};

/* export const changeShouldFillEditForm = () => (dispatch) => {
  fetchCurrencies()
    .then((currencies) => dispatch(getCurrencySuccess(Object.keys(currencies))));
}; */