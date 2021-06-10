export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const REQUEST_CURRENCIES_FAILURE = 'REQUEST_CURRENCIES_FAILURE';
export const REQUEST_CURRENCIES_SUCESSFUL = 'REQUEST_CURRENCIES_SUCESSFUL';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const requestCurrenciesSuccesful = (payload) => ({
  type: REQUEST_CURRENCIES_SUCESSFUL,
  payload,
});

export const requestCurrenciesFailure = (payload) => ({
  type: REQUEST_CURRENCIES_FAILURE,
  payload,
});

export const requestAPI = async (dispatch) => {
  dispatch(requestCurrencies());
  try {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await request.JSON();
    dispatch(requestCurrenciesSuccesful(response));
  } catch (error) {
    dispatch(requestCurrenciesFailure(error));
  }
};
