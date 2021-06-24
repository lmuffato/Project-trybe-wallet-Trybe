// Coloque aqui suas actions
export const GET_EMAIL = 'GET_EMAIL';
export const getEmail = (email) => ({
  type: GET_EMAIL,
  email,
});
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY';
const receiveCurrency = (currency) => ({
  type: RECEIVE_CURRENCY,
  currency,
});

// thunk para pegar as moedas na api;
export function fetchCurrency() {
  return (dispatch) => {
    dispatch(requestCurrency());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currency) => dispatch(receiveCurrency(currency)));
  };
}

export const ADD_EXPENSES = 'ADD_EXPENSES';
export const addExpenses = (expense) => ({
  type: ADD_EXPENSES,
  expense,
});

export const DELETE_EXPENSES = 'DELETE_EXPENSES';
export const deleteExpenses = (expense) => ({
  type: DELETE_EXPENSES,
  expense,
});
