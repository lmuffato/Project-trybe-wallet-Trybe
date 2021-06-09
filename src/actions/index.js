// Coloque aqui suas actions
import getCurrencies from '../services/api';
import filterCurrencies from '../services/filterCurrency';

export const LOGIN = 'LOGIN';
export const ADD_EXP = 'ADD_EXP';
export const GET_CURR = 'GET_CURR';
export const GET_CURR_SUCCESS = 'GET_CURR_SUCCESS';
export const GET_CURR_FAILURE = 'GET_CURR_FAILURE';

const loginAction = (payload) => ({ type: LOGIN, payload });
export default loginAction;

export const addingExpense = (payload) => ({ type: ADD_EXP, payload });

export const getCurrTry = () => ({
  type: GET_CURR,
});

export const getCurrSuccess = (payload) => ({
  type: GET_CURR_SUCCESS,
  payload,
});

export const getCurrFailure = (error) => ({
  type: GET_CURR_FAILURE,
  error,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  dispatch(getCurrTry());
  try {
    const request = await getCurrencies();
    const currencyList = filterCurrencies(request);
    dispatch(getCurrSuccess(currencyList));
  } catch (error) {
    dispatch(getCurrFailure(error));
  }
};
