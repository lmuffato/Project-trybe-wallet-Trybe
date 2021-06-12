// // Coloque aqui suas actions

export const LOGIN = 'LOGIN';

export const loginEmail = (email) => ({
  type: LOGIN,
  user: {
    email,
  },
});

export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';

const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

const receiveCurrencies = (currencies) => ({
  type: RECEIVE_CURRENCIES,
  wallet: {
    currencies,
  },
});

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(requestCurrency());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => dispatch(receiveCurrencies(currencies)));
  };
}

export const ADD_TO_WALLET = 'ADD_TO_WALLET';

export const addExpense = (expenses) => ({
  type: ADD_TO_WALLET,
  wallet: {
    expenses,
  },
});
