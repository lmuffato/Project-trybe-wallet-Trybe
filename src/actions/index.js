import { fetchAPI } from '../services/fetchAPI';

// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const WALLET = 'WALLET';
export const SET_COINS = 'SET_COINS';
export const RATES = 'RATES';
export const EXPENSE = 'EXPENSE';
export const ATT_EXPENSES = 'ATT_EXPENSES';

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
  fetchAPI()
    .then((currencies) => dispatch(setCoins(currencies)));
};

export const setExpense = (expenses) => {
  console.log('setexpense on.');
  return {
    type: EXPENSE,
    payload: expenses,
  };
};

export const attExpense = (expenses) => ({
  type: ATT_EXPENSES,
  payload: expenses,
});

export default loginUser;
