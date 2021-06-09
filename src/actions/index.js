// Coloque aqui suas actions
import { getAPI } from '../utils/funtions';

export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_EMAIL_USER = 'UPDATE_EMAIL_USER';
export const GET_DATA = 'GET_DATA';
export const GET_DATA_SUCESS = 'GET_DATA_SUCESS';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';

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

export const getDataThunk = () => (dispatch) => {
  dispatch(getData());
  getAPI()
    .then((response) => {
      const filterCurrenties = response.filter((moedas) => moedas !== 'USDT');
      dispatch(getDataSucess(filterCurrenties));
    })
    .catch((error) => dispatch(getDataError(error)));
};
