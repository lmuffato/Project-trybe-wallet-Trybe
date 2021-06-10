import getAPI from '../services/currenciesAPI';
import { GET_CURRENCIES, GET_CURRENCIES_SUCESS } from '.';

export const getCurrenciesAPI = () => ({
  type: GET_CURRENCIES,
});

export const getCurrenciesAPISuccess = (payload) => ({
  type: GET_CURRENCIES_SUCESS,
  payload,
});

export const getCurrenciesAPIThunk = () => (dispatch) => {
  dispatch(getCurrenciesAPI());
  getAPI()
    .then((response) => {
      const valuesAPI = Object.values(response);
      dispatch(getCurrenciesAPISuccess(valuesAPI));
    });
};
