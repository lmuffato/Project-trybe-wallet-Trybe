import fetchCurrencies from '../services/requestApi';

export const LOGIN = 'LOGIN';

export const GET_CURRENCIES = 'GET_CURRENCIES';

export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';

export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';

export const GET_EXPENSES = 'GET_EXPENSES';

export const GET_EXPENSES_SUCCESS = 'GET_EXPENSES_SUCCESS';

export const login = (email) => ({ type: LOGIN, email });

export const getCurrencies = () => ({
  type: GET_CURRENCIES,
});

export const getCurrenciesSuccess = (payload) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});

export const getCurrenciesError = (payload) => ({
  type: GET_CURRENCIES_ERROR,
  payload,
});

export const getExpenses = () => ({
  type: GET_EXPENSES,
});

export const getExpensesSuccess = (payload) => ({
  type: GET_EXPENSES_SUCCESS,
  payload,
});

export const getCurrenciesThunk = () => (dispatch) => {
  dispatch(getCurrencies());

  fetchCurrencies()
    .then((response) => {
      const currencyValue = Object.values(response);
      dispatch(getCurrenciesSuccess(currencyValue));
    });
};

export const getExpensesThunk = (expense) => (dispatch) => {
  dispatch(getExpenses());

  fetchCurrencies()
    .then((response) => {
      const expenseInfo = { ...expense, exchangeRates: { ...response } };
      dispatch(getExpensesSuccess(expenseInfo));
    });
};
