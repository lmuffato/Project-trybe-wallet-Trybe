import fetchAPI from '../fetchAPI';

export const LOADING_CURRENCY = 'LOADING_CURRENCY';

export const FINISH_LOADING = 'FINISH_LOADING';

export const GET_CURRENCY_SUCCESS = 'GET_CURRENCY_SUCCESS';

export const ADD_EXPENSES = 'ADD_EXPENSES';

export const loadingCurrency = () => ({
  type: LOADING_CURRENCY,
});

export const finishLoading = () => ({
  type: FINISH_LOADING,
});

export const getCurrencySuccess = (payload) => ({
  type: GET_CURRENCY_SUCCESS,
  payload,
});

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const getAPIThunk = () => (dispatch) => {
  dispatch(loadingCurrency());
  fetchAPI().then((response) => {
    const apiData = Object.keys(response);
    dispatch(getCurrencySuccess(apiData));
    dispatch(finishLoading());
  }).catch(() => { dispatch(getCurrencySuccess([])); }); // Quando tiver um erro, retorna um array vazio
};

export const addExpensesThunk = (expenses) => (dispatch) => {
  fetchAPI().then((response) => {
    const exchangeRates = (response);
    const data = { ...expenses, exchangeRates };
    dispatch(addExpenses(data));
  });
};
