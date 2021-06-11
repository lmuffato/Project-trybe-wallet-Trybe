const signIn = (state) => ({ type: 'SIGN_IN', state });
export default signIn;

export const SIGN_IN = 'SIGN_IN';
export const ADD_CURRENCIE = 'ADD_CURRENCIE';
export const REQUESTED_API = 'REQUESTED_API';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const GET_EXCHANGE = 'GET_EXCHANGE';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addCurrencies = (wallet) => ({ type: 'ADD_CURRENCIE', wallet });

export const requestedApi = () => ({ type: 'REQUESTED_API', isFetching: true });

export const requestSuccess = () => ({ type: 'REQUEST_SUCCESS', isFetching: 'success' });

export const requestError = () => ({ type: 'REQUEST_ERROR', isFetching: 'error' });

export const getExchange = (exchanges) => ({ type: 'GET_EXCHANGE', exchanges });

export const addExpense = (expense) => ({ type: ADD_EXPENSE, expense });
