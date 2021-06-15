export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const ADD_EXCHANGE_RATES = 'ADD_EXCHANGE_RATES';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export const requestCurrencies = (payload) => ({
  type: REQUEST_CURRENCIES,
  payload: Object.keys(payload),
});

export const addExchangeRates = (payload) => ({
  type: ADD_EXCHANGE_RATES,
  payload,
});

export const requestAPI = async () => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  delete response.USDT;
  return response;
};

export const getCurrencies = () => async (dispatch) => {
  const currenciesGotten = await requestAPI();
  dispatch(requestCurrencies(currenciesGotten));
};

export const addExpense = (payload) => async (dispatch) => {
  const currenciesGotten = await requestAPI();
  const uniqueObject = { ...payload, exchangeRates: { ...currenciesGotten } };
  dispatch(addExchangeRates(uniqueObject));
};
