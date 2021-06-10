// Coloque aqui suas actions
import currenciesAPI from '../services/currenciesAPI';

export const ADD_USER = 'ADD_USER';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS';
export const FETCH_CURRENCIES_ERROR = 'FETCH_CURRENCIES_ERROR';

export const addUser = (email) => ({
  type: ADD_USER,
  user: email,
});

export const addEpenses = (arrayExpenses) => ({
  type: ADD_EXPENSE,
  expenses: arrayExpenses,
});

export const fetchCurrencies = () => ({
  type: FETCH_CURRENCIES,
});

export const fetchCurrenciesSuccess = (currencies) => ({
  type: FETCH_CURRENCIES_SUCCESS,
  currencies,
});

export const fetchCurrenciesError = (payload) => ({
  type: FETCH_CURRENCIES_ERROR,
  payload,
});

export const getCurrenciesThunk = () => (dispatch) => {
  dispatch(fetchCurrencies());
  currenciesAPI()
    .then((res) => {
      dispatch(fetchCurrenciesSuccess(res));
    })
    .catch(() => { dispatch(fetchCurrenciesError()); });
};
