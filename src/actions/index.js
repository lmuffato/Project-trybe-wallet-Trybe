// Coloque aqui suas actions
import { getCurrency } from '../services/currencyApi';

export const EMAIL = 'EMAIL';
export const GET_API_AWESOME = 'GET_API_AWESOME';
export const GET_API_CURRENCY_SUCCESS = 'GET_API_CURRENCY_SUCCESS';

const user = (value) => ({ type: EMAIL, value });
export default user;

export const getApiAwesome = () => ({
  type: GET_API_AWESOME,
});

export const getApiSuccess = (payload) => ({
  type: GET_API_CURRENCY_SUCCESS,
  payload,
});

export const getCurrencyThunk = () => (dispatch) => {
  // is loading true
  dispatch(getApiAwesome());

  getCurrency()
    .then((currency) => {
      const allCurrency = Object.values(currency);
      dispatch(getApiSuccess({
        allCurrency,
      }));
    });
};
