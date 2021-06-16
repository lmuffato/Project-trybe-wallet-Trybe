export const VALID_EMAIL = 'VALID_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const validEmail = (payload) => ({ type: VALID_EMAIL, payload });

const requestCurrencies = () => ({ type: REQUEST_CURRENCIES });
const receiveCurrencies = (currencies) => ({ type: RECEIVE_CURRENCIES, currencies });

const addExpenses = (expenses) => ({ type: ADD_EXPENSES, expenses });

export function dataExpenses(expenses) {
  return async (dispatch) => {
    dispatch(addExpenses(expenses));
  };
}

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((resp) => resp.json())
      .then((currencies) => {
        delete currencies.USDT;
        dispatch(receiveCurrencies(currencies));
        // const arrayCurrencies = Object.entries(currencies);
        // dispatch(receiveCurrencies(arrayCurrencies.filter((cur) => cur[0] !== 'USDT')));
      });
  };
}
