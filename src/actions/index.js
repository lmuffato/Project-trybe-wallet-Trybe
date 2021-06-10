export const LOGIN = 'LOGIN';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY';
export const REQUEST_CURRENCY_ONCLICK = 'REQUEST_CURRENCY_ONCLICK';
export const RECEIVE_CURRENCY_ONCLICK = 'RECEIVE_CURRENCY_ONCLICK';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

const requestCurrency = () => ({
  type: REQUEST_CURRENCY });

const receiveCurrency = (currency) => ({
  type: RECEIVE_CURRENCY,
  currency });

export function fetchCurrency() {
  return (dispatch) => { // thunk declarado
    dispatch(requestCurrency());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currency) => dispatch(receiveCurrency(currency)));
  };
}

const receiveCurrencyOnClick = (value, currency) => ({
  type: RECEIVE_CURRENCY_ONCLICK,
  payload: { ...value, exchangeRates: currency } });

export function fetchCurrencyOnClick(value) {
  return (dispatch) => { // thunk declarado
    dispatch(requestCurrency());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currency) => dispatch(receiveCurrencyOnClick(value, currency)));
  };
}
