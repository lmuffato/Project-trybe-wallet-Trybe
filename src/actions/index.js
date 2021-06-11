export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const SAVE_VALUE_EMAIL = 'SAVE_VALUE_EMAIL';

export const saveValueEmail = (email) => ({
  type: SAVE_VALUE_EMAIL,
  email,
});

export const requestCurrencies = (payload) => ({
  type: REQUEST_CURRENCIES,
  payload,
});

const requisitaAPI = async () => {
  const API = await fetch('https://economia.awesomeapi.com.br/json/all');
  const respostaAPI = await API.json();
  delete respostaAPI.USDT;
  return respostaAPI;
};

export const myCurrencies = () => async (dispatch) => {
  const getCurrencies = await requisitaAPI();
  dispatch(requestCurrencies(Object.keys(getCurrencies)));
};
