// Coloque aqui suas actions
import reqAPI from '../services/reqAPI';

export const HANDLE_EMAIL = 'HANDLE_EMAIL';
export const handleEmail = (email) => ({ type: HANDLE_EMAIL, email });

export const GET_CURRENCIES = 'GET_CURRENCIES';
export const getCurrencies = (currency) => ({
  type: GET_CURRENCIES, currency });

export const dispatchCurrencies = () => async (dispatch) => {
  dispatch(getCurrencies());
  const resp = await reqAPI();
  dispatch(getCurrencies(Object.keys(resp)));
};
