// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_EXPENCE = 'ADD_EXPENCE';
export const ADD_EXPENCE_SUCCESS = 'ADD_EXPENCE_SUCCESS';
export const ADD_EXPENCE_ERROR = 'ADD_EXPENCE';
export const GET_CURRENCY = 'GET_CURRENCY';
export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';
export const GET_CURRENCY_ERROR = 'GET_CURRENCY_ERROR';

export function addEmail(email) {
  return {
    type: ADD_EMAIL,
    payload: email,
  };
}

export function addExpence() {
  return {
    type: ADD_EXPENCE,
  };
}

export function addExpenceSuccess(payload) {
  return {
    type: ADD_EXPENCE_SUCCESS,
    payload,
  };
}

export function addExpenceError(payload) {
  return {
    type: ADD_EXPENCE_ERROR,
    payload,
  };
}

export function getCurrency() {
  return {
    type: GET_CURRENCY,
  };
}

export function getCurrencySuccess(payload) {
  return {
    type: GET_CURRENCY_SUCCESS,
    payload,
  };
}

export function getCurrencyError(payload) {
  return {
    type: GET_CURRENCY_ERROR,
    payload,
  };
}

export const addExpenceThunk = (payload) => async (dispatch) => {
  dispatch(addExpence());
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();

    payload.exchangeRates = json;

    dispatch(addExpenceSuccess(payload));
  } catch (error) {
    dispatch(addExpenceError(error));
  }
};

export const getCurrencyThunk = () => async (dispatch) => {
  dispatch(getCurrency());

  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();

    const currency = Object.keys(json);
    const filteredCurrency = currency.filter((item) => item !== 'USDT');

    dispatch(getCurrencySuccess(filteredCurrency));
  } catch (error) {
    dispatch(getCurrencyError(error));
  }
};
