import fetchApi from '../components/api';

export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUEST = 'REQUEST';
export const ERROR = 'ERROR';
export const CURRENCIES = 'CURRENCIES';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export const requestCurrencies = () => ({
  type: REQUEST,
});

export const errorCurrencies = (payload) => ({
  type: ERROR,
  payload,
});

export const getCurrencies = (payload) => ({
  type: CURRENCIES,
  payload,
});

export const addCurrencies = () => async (dispatch) => { // thunk
  dispatch(requestCurrencies());
  try {
    const response = await fetchApi();
    // const keysCurrencies = Object.keys(response)
    //   .filter((currencie) => currencie !== 'USDT');
    // dispatch(getCurrencies(keysCurrencies));
    dispatch(getCurrencies(response));
  } catch (error) {
    dispatch(errorCurrencies(error));
  }
  dispatch(requestCurrencies());
};
