import { getCurrences } from '../services/currencesApi';
import { sumTotal } from '../services/total';

export const LOGIN = 'LOGIN';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const GET_CURRENCES_LOADING = 'GET_CURRENCES_LOADING';
export const GET_CURRENCES_SUCCESS = 'GET_CURRENCES_SUCCESS';
export const GET_CURRENCES_ERROR = 'GET_CURRENCES_ERROR';
export const TOTAL_VALUES = 'TOTAL_VALUES';

export const sendLogin = (payload) => ({
  type: LOGIN,
  payload,
});

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const getCurrencesLoading = () => ({
  type: GET_CURRENCES_LOADING,
});

export const getCurrencesSuccess = (code) => ({
  type: GET_CURRENCES_SUCCESS,
  code,
});

export const getCurrencesError = (error) => ({
  type: GET_CURRENCES_ERROR,
  error,
});

export const getCurrencesThunk = () => (dispatch) => {
  dispatch(getCurrencesLoading());

  getCurrences()
    .then((res) => {
      delete res.USDT;
      dispatch(getCurrencesSuccess(res));
    })
    .catch(() => {
      console.log(getCurrencesError());
      dispatch(getCurrencesError());
    });
};

export const totalValues = (total) => ({
  type: TOTAL_VALUES,
  total,
});

export const getCurrencesThunk2 = (state) => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const dataAPI = await response.json();
    delete dataAPI.USDT;

    const total = sumTotal(state, dataAPI);

    dispatch(addExpenses({ ...state, exchangeRates: dataAPI }));
    dispatch(totalValues(Number(total)));
  } catch (error) {
    dispatch(getCurrencesError(error));
  }
};
