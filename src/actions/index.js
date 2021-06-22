import {
  LOGIN, REQUEST_RATES, SET_RATES, UPDATE_EXPENSES, REMOVE_EXPENSE } from '../constants';

const generateAction = (actionType) => (actionPayload) => (
  { type: actionType, payload: actionPayload });

const loginAction = generateAction(LOGIN);

const setExchangeRates = (payload) => ({ type: SET_RATES, payload });

const requestExchangeRates = () => ({ type: REQUEST_RATES });

export const addNewExpenseAction = generateAction(UPDATE_EXPENSES);

export const removeExpenseAction = generateAction(REMOVE_EXPENSE);

export const fetchExchangeRates = () => async (dispatch) => {
  dispatch(requestExchangeRates());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await response.json();
  return dispatch(setExchangeRates(json));
};

export default loginAction;
