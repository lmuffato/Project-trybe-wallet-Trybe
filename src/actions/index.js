export const SAVE_USER_EMAIL = 'SAVE_USER_EMAIL';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY';

export const saveUserEmail = (email) => ({
  type: SAVE_USER_EMAIL,
  payload: email,
});

const requestCurrencies = () => ({
  type: REQUEST_CURRENCY,
});

const receiveCurrencies = (currency) => ({
  type: RECEIVE_CURRENCY,
  payload: currency,
});

export const fetchCurrency = () => async (dispatch) => {
  dispatch(requestCurrencies());
  const response = await fetch('');
  const currencies = await response.json();
  return dispatch(receiveCurrencies(currencies));
};
