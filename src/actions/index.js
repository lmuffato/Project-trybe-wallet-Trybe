import requestAPI from '../services/requestAPI';

// Coloque aqui suas actions

export const LOGIN = 'LOGIN';

export const salvarLogin = (email) => ({
  type: LOGIN,
  email,
});

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const RESOLVED_CURRENCIES = 'RESOLVED_CURRENCIES';
export const REJECT_CURRENCIES = 'REJECT_CURRENCIES';

export const request = () => ({
  type: REQUEST_CURRENCIES,
});

export const resolve = (currency) => ({
  type: RESOLVED_CURRENCIES,
  currency,
});

export const reject = (error) => ({
  type: REJECT_CURRENCIES,
  error,
});

export const saveCurrencies = () => async (dispatch) => {
  dispatch(request());
  try {
    const response = await requestAPI();
    dispatch(resolve(Object.keys(response)));
  } catch (error) {
    dispatch(reject(error));
  }
};
