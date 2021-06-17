export const USER_LOGIN = 'USER_LOGIN';
export const userLogin = (email) => ({
  type: USER_LOGIN,
  payload: email,
});

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const receiveCurrencies = (currencies) => ({
  type: RECEIVE_CURRENCIES,
  payload: currencies,
});

export const fetchAPI = () => async (dispatch) => {
  dispatch(requestCurrencies());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  dispatch(receiveCurrencies(Object.keys(data)
    .filter((currency) => currency !== 'USDT')));
};
