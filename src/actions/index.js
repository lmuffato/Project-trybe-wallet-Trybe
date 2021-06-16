import getCurrenciesFromAPI from '../services/api';

export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';
export const GET_CURRENCIES_LIST_SUCCESS = 'GET_CURRENCIES_LIST_SUCCESS';
export const GET_CURRENCIES_DATA_SUCCESS = 'GET_CURRENCIES_DATA_SUCCESS';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

// LOGIN action creator
export const login = (email, password) => ({
  type: LOGIN,
  email,
  password,
});

export const getCurrencies = () => ({
  type: GET_CURRENCIES,
});

export const getCurrenciesError = (error) => ({
  type: GET_CURRENCIES_ERROR,
  error,
});

export const getCurrenciesListSuccess = (currenciesList) => ({
  type: GET_CURRENCIES_LIST_SUCCESS,
  currenciesList,
});

export const getCurrenciesDataSuccess = (newExpense) => ({
  type: GET_CURRENCIES_DATA_SUCCESS,
  newExpense,
});

export const deleteExpense = (updatedExpenses) => ({
  type: DELETE_EXPENSE,
  updatedExpenses,
});

export const getCurrenciesListThunk = () => (dispatch) => {
  dispatch(getCurrencies());
  getCurrenciesFromAPI()
    .then((res) => {
      const currenciesList = Object.keys(res).filter((curr) => curr !== 'USDT');
      dispatch(getCurrenciesListSuccess(currenciesList));
    })
    .catch((error) => {
      getCurrenciesError(error);
    });
};

export const getCurrenciesDataThunk = (formState) => (dispatch) => {
  dispatch(getCurrencies());
  getCurrenciesFromAPI()
    .then((exchangeRates) => {
      const newExpense = {
        ...formState,
        exchangeRates,
      };
      dispatch(getCurrenciesDataSuccess(newExpense));
    })
    .catch((error) => {
      console.log(error);
      getCurrenciesError(error);
    });
};

export const deleteExpenseThunk = (expId, expenses) => (dispatch) => {
  const updatedExp = [...expenses.slice(0, expId), ...expenses.slice(expId + 1)];
  // const updatedExpReIndexed = updatedExp.map((exp, index) => ({ ...exp, id: index }));
  dispatch(deleteExpense(updatedExp));
};
