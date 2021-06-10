import currenciesAPI from '../services/api';

export const STORE_USER = 'STORE_USER';
export const STORE_EXPENSE = 'STORE_EXPENSE';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export function storeUser(payload) {
  return {
    type: STORE_USER,
    payload,
  };
}

export function storeExpense(payload) {
  return {
    type: STORE_EXPENSE,
    payload,
  };
}

export function getCurrencies() {
  return {
    type: GET_CURRENCIES,
  };
}

export function getCurrenciesSuccess(payload) {
  return {
    type: GET_CURRENCIES_SUCCESS,
    payload,
  };
}

export function getCurrenciesError(payload) {
  return {
    type: GET_CURRENCIES_ERROR,
    payload,
  };
}

export function getCurrenciesThunk() {
  return async (dispatch) => {
    dispatch(getCurrencies());
    try {
      const currencies = await currenciesAPI();
      dispatch(getCurrenciesSuccess(currencies));
    } catch (error) {
      dispatch(getCurrenciesError(error));
    }
  };
}

export function deleteExpense(payload) {
  return {
    type: DELETE_EXPENSE,
    payload,
  };
}
