import {
  ENDPOINT, LOGIN, REQUEST_RATES, SET_RATES, UPDATE_EXPENSES, REMOVE_EXPENSE,
} from '../constants';
import actionGen from './util';

export const loginAction = actionGen(LOGIN);

const setExchangeRates = (payload) => ({ type: SET_RATES, payload });

const requestExchangeRates = () => ({ type: REQUEST_RATES });

export const fetchExchangeRates = () => (dispatch) => {
  dispatch(requestExchangeRates());
  console.log('Fetch chamado');
  return fetch(ENDPOINT)
    .then((response) => response.json())
    .then((json) => dispatch(setExchangeRates(json)));
};

export const addNewExpenseAction = actionGen(UPDATE_EXPENSES);

export const removeExpenseAction = actionGen(REMOVE_EXPENSE);
