export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export const requestCurrencies = (payload) => ({
  type: REQUEST_CURRENCIES,
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
  dispatch(requestCurrencies(Object.keys(currenciesGotten)));
};
