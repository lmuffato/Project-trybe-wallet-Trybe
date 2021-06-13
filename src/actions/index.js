export const LOGIN = 'LOGIN';
export const ADD_DESPESAS = 'ADD_DESPESAS';
export const REQUEST_COINS = 'REQUEST_COINS';
export const RECEIVE_COINS = 'RECEIVE_COINS';

const API = 'https://economia.awesomeapi.com.br/json/all';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const addDespesas = (despesaAtual, getCoins) => ({
  type: ADD_DESPESAS,
  despesaAtual,
  getCoins,
});

export const requestCoins = () => ({
  type: REQUEST_COINS,
});

export const receiveCoins = (coins) => ({
  type: RECEIVE_COINS,
  payload: coins,
});

export function fetchApi() {
  return (dispatch) => {
    dispatch(requestCoins());
    return fetch(API)
      .then((response) => response.json())
      .then((coins) => dispatch(receiveCoins(coins)));
  };
}
