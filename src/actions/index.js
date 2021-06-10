// Coloque aqui suas actions

export const LOGIN_DATA = 'LOGIN_DATA';
export const CURRENCIES_REQUEST = 'CURRENCIES_REQUEST';

// action creator

const loginAction = (state) => ({ type: LOGIN_DATA, state });
export const currenciesRequest = (state) => ({ type: CURRENCIES_REQUEST, state });

export default loginAction;
