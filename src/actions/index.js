export const LOGIN = 'LOGIN';
export const RECEIVE_COINS = 'RECEIVE_COINS';

export const loginAction = (email) => ({
  type: 'LOGIN',
  email,
});

export const receiveCoins = (currencies) => ({
  type: RECEIVE_COINS,
  currencies,
});

export const fetchCoinCodes = () => async (dispatch) => {
  const currencies = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currenciesParse = await currencies.json();
  dispatch(receiveCoins(currenciesParse));
};
