import fetchCurrency from '../services/api';

export const LOGIN = 'LOGIN';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';

export const getCurrenciesSuccess = (payload) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});

export const getCurrenciesError = (payload) => ({
  type: GET_CURRENCIES_ERROR,
  payload,
});

export const getCurrenciesThunk = () => async (dispatch) => {
  try {
    const currencies = await fetchCurrency();
    dispatch(getCurrenciesSuccess(currencies));
  } catch (error) {
    dispatch(getCurrenciesError(error));
  }
};

export const SAVE_EXPENSE_SUCCESS = 'SAVE_EXPENSE_SUCCESS';
export const SAVE_EXPENSE_ERROR = 'SAVE_EXPENSE_ERROR';

export const saveExpenseSuccess = (payload) => ({
  type: SAVE_EXPENSE_SUCCESS,
  payload,
});

export const saveExpenseError = (payload) => ({
  type: SAVE_EXPENSE_ERROR,
  payload,
});

const addTotalToAction = (payload) => {
  const { currency, exchangeRates, value } = payload;
  const exchangeRate = exchangeRates[currency].ask;
  const total = exchangeRate * value;
  return {
    data: payload,
    total,
  };
};

export const saveExpenseThunk = (payload) => async (dispatch) => {
  try {
    const currencies = await fetchCurrency();
    const walletActionWithTotal = addTotalToAction(
      { ...payload, exchangeRates: currencies },
    );
    dispatch(saveExpenseSuccess(walletActionWithTotal));
  } catch (error) {
    dispatch(saveExpenseError(error));
  }
};
