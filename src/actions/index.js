// Coloque aqui suas actions
import { getAPI, calculoDespesa } from '../utils/funtions';

export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_EMAIL_USER = 'UPDATE_EMAIL_USER';
export const GET_DATA = 'GET_DATA';
export const GET_DATA_SUCESS = 'GET_DATA_SUCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';
export const ADD_DESPESA = 'ADD_DESPESA';
export const ADD_DESPESA_SUCESS = 'ADD_DESPESA_SUCESS';
export const ADD_DESPESA_ERROR = 'ADD_DESPESA_ERROR';
export const TOTAL_PRICE = 'TOTAL_PRICE';

export const validadeEmail = (payload) => ({
  type: UPDATE_EMAIL,
  payload,
});

export const validadePassword = (payload) => ({
  type: UPDATE_PASSWORD,
  payload,
});

export const emailUser = (payload) => ({
  type: UPDATE_EMAIL_USER,
  payload,
});

export const getData = () => ({
  type: GET_DATA,
});

export const getDataSucess = (payload) => ({
  type: GET_DATA_SUCESS,
  payload,
});

export const getDataError = (payload) => ({
  type: GET_DATA_ERROR,
  payload,
});

export const addDespesa = () => ({
  type: ADD_DESPESA,
});

export const addDespesaSucess = (payload) => ({
  type: ADD_DESPESA_SUCESS,
  payload,
});

export const addDespesaError = (payload) => ({
  type: ADD_DESPESA_ERROR,
  payload,
});

export const totalPrice = (state, response) => {
  const payload = calculoDespesa(state, response);
  return {
    type: TOTAL_PRICE,
    payload,
  };
};

export const addDespesaThunk = (state) => (dispatch) => {
  dispatch(addDespesa);
  getAPI()
    .then(async (response) => {
      const expenses = {
        ...state,
        exchangeRates: response,
      };
      dispatch(addDespesaSucess(expenses));
    })
    .catch((error) => dispatch(addDespesaError(error)));
};

export const getDataThunk = () => (dispatch) => {
  dispatch(getData());
  getAPI()
    .then((response) => {
      const filterCurrenties = Object.keys(response)
        .filter((moedas) => moedas !== 'USDT');
      dispatch(getDataSucess(filterCurrenties));
    })
    .catch((error) => dispatch(getDataError(error)));
};
