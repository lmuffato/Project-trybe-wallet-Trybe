// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const GET_CURRENCY = 'GET_CURRENCY';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DEL_EXPENSE = 'DEL_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const makeLogin = (userData) => ({ type: LOGIN, payload: userData });
export const requestAPI = () => ({ type: REQUEST_API });

export const updateCurrencies = (currenciesQuotation) => ({
  type: GET_CURRENCY,
  payload: currenciesQuotation,
});

export const addExpense = (newExpense) => ({
  type: ADD_EXPENSE,
  payload: newExpense,
});

export const editExpense = (expenseToUpdate) => ({
  type: EDIT_EXPENSE,
  payload: expenseToUpdate,
});

export const delExpense = (idTaskToDel) => ({
  type: DEL_EXPENSE,
  payload: idTaskToDel,
});

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((response) => dispatch(updateCurrencies(response)));
  };
}
