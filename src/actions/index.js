export const USER = 'USER';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS';
export const GET_CURRENCIES_ERROR = 'GET_CURRENCIES_ERROR';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DEL_EXPENSE = 'DEL_EXPENSE';

export const login = (email, password) => ({
  type: USER,
  payload: {
    email,
    password,
  },
});

export const getCurrencies = () => ({
  type: GET_CURRENCIES,
});

export const getCurrenciesSuccess = (currencies) => ({
  type: GET_CURRENCIES_SUCCESS,
  payload: {
    currencies,
  },
});

export const getCurrenciesError = (error) => ({
  type: GET_CURRENCIES_ERROR,
  payload: {
    error,
  },
});

export const getCurrenciesThunk = () => (dispatch) => {
  dispatch(getCurrencies());
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((res) => {
      res.json().then((data) => {
        dispatch(getCurrenciesSuccess(data));
      });
    })
    .catch(() => { dispatch(getCurrenciesError()); });
};

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: {
    expense,
  },
});

export const delExpense = (expense) => ({
  type: DEL_EXPENSE,
  payload: {
    expense,
  },
});
