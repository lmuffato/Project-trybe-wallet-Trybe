export const CURRENCIES = 'REQUEST_CURRENCIES';
export const CURRENCIES_SUCCESS = 'RECEIVED_CURRENCIES';
export const CURRENCIES_ERROR = 'RECEIVED_CURRENCIES_ERROR';

export const requestCurrencies = () => ({
  type: CURRENCIES,
});

export const currenciesSuccess = (payload) => ({
  type: CURRENCIES_SUCCESS,
  payload,
});

export const currenciesError = (payload) => ({
  type: CURRENCIES_ERROR,
  payload,
});
