import fetchAPIRates, { fetchAPI } from '../services/fetchAPI';

// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const WALLET = 'WALLET';
export const SET_COINS = 'SET_COINS';
export const RATES = 'RATES';
export const EXPENSE = 'EXPENSE';

// action utilizada para colocar login (email) no Store.
const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload, // email
});

// action p/ colocar moedas no store.
export const setCoins = (currencies) => ({
  type: SET_COINS,
  payload: currencies,
});

export const getCoins = () => (dispatch) => {
  // console.log('getCoins on.');
  fetchAPI()
    .then((currencies) => dispatch(setCoins(currencies)));
};

export const setRates = (rates) => ({
  type: RATES,
  payload: rates,
});

export const getRates = () => (dispatch) => {
  fetchAPIRates()
    .then((rates) => dispatch(setRates(rates)));
};

export const setExpense = (expense) => {
  console.log('setexpense on.');
  return {
    type: EXPENSE,
    payload: expense,
  };
};

export default loginUser;
