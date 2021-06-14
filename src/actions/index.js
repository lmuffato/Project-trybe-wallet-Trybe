// Coloque aqui suas actions
const apiUrl = 'https://economia.awesomeapi.com.br/json/all';

export const USER_LOGIN = 'USER_LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const EXANGE_RATES = 'EXANGE_RATES';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';

// AC no fim do nome para diferenciar as 'Action Creator'
export const getCurrenciesAC = (currencies) => ({
  type: GET_CURRENCIES,
  payload: currencies,
});

export const getExangeRatesAC = (currencies) => ({
  type: EXANGE_RATES,
  payload: currencies,
});

export const saveExpensesAC = (expenses) => ({
  type: SAVE_EXPENSES,
  payload: expenses,
});

export function fetchCurrencies(action) {
  return (dispatch) => (
    fetch(apiUrl)
      .then((response) => response.json()
        .then((currencies) => dispatch(action(currencies))))
  );
}

const loginActionCreator = (data) => ({
  type: USER_LOGIN,
  payload: data,
});

export default loginActionCreator;
