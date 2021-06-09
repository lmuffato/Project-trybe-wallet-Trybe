// constantes com as strings
const LOGIN = 'LOGIN';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const EXPENSES = 'EXPENSES';

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

export const failedRequest = (error) => ({ type: FAILED_REQUEST, payload: error });

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json()
        .then(
          (data) => dispatch(receiveCurrencies(data)),
          (error) => dispatch(failedRequest(error)),
        ));
  };
}

// actions relacionadas com novas expenses
export const changeExpenses = (expense, price, exchangeRates) => (
  {
    type: 'EXPENSES',
    expense,
    price: price * exchangeRates[expense.currency].ask,
    exchangeRates,
  });

export function fetchExchageRates(expense, price) {
  return (dispatch) => {
    dispatch(requestCurrencies());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json()
        .then(
          (data) => dispatch(changeExpenses(expense, price, data)),
          (error) => dispatch(failedRequest(error)),
        ));
  };
}
