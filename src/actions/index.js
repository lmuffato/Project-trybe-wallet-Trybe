import fetchAPI from '../services/fetchAPI';

// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const WALLET = 'WALLET';
export const SET_COINS = 'SET_COINS';

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

export default loginUser;
