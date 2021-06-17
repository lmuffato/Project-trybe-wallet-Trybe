export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const ADD_EXCHANGERATES = 'ADD_EXCHANGERATES';
export const ADD_EXPENSES = 'ADD_EXPENSES';

const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES });

const receiveCurrencies = (currencies) => ({
  type: RECEIVE_CURRENCIES,
  currencies });

export function fetchCurrencies() {
  return async (dispatch) => {
    dispatch(requestCurrencies());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    delete currencies.USDT;
    const currenciesCode = Object.values(currencies);
    return dispatch(receiveCurrencies(currenciesCode));
  };
}
export const requestExchangeRates = () => ({ type: ADD_EXCHANGERATES });

export const addExpenses = (expenses) => ({ type: ADD_EXPENSES, expenses });

/* export function fetchExchangesRates() {
  return async (dispatch) => {
    dispatch(requestExchangeRates());
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    delete currencies.USDT;
    const currenciesCode = Object.values(currencies);
    return dispatch(addExpenses(currenciesCode));
  };
} */
