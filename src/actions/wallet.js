import getApi from '../services/Api';

export const GET_CURRENCY = 'GET_CURRENCY';

export const getCurrency = () => ({
  type: GET_CURRENCY,
});

export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';

export const getCurrencySuccess = (payload) => ({
  type: GET_CURRENCY_SUCCESS,
  payload,
});

export const apiThunk = () => (dispatch) => {
  getApi()
    .then((response) => {
      const apiData = Object.values(response);
      const currencyCode = apiData.map((currency) => (currency.code));
      currencyCode.splice(1, 1);
      dispatch(getCurrencySuccess(currencyCode));
    });
};

export const GET_EXPENSES_SUCCESS = 'GET_EXPENSES_SUCCESS';

export const getExpensesSuccess = (payload) => ({
  type: GET_EXPENSES_SUCCESS,
  payload,
});

export const getExpensesThunk = (expenses) => (dispatch) => {
  getApi()
    .then((response) => {
      const expenseData = {
        ...expenses, exchangeRates: { ...response },
      };
      dispatch(getExpensesSuccess(expenseData));
    });
};
