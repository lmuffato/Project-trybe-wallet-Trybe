// constantes com as strings
const LOGIN = 'LOGIN';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';

// actions relacionadas ao login
export const login = (email, password) => ({ type: LOGIN, email, password });

// actions relacionadas ao fetching
export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const receiveCurrencies = (currencies) => ({
  type: RECEIVE_CURRENCIES,
  currencies,
});

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => dispatch(receiveCurrencies(data)));
  };
}

// actions relacionadas com novas expenses
export const changeExpenses = (expenses) => ({ type: 'EXPENSES', expenses });
