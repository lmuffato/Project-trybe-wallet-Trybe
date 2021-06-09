export const login = (email) => ({
  type: 'LOGIN',
  email,
});

export const getApi = () => ({
  type: 'GET_API',
});

export const getApiSuccess = (currencies) => ({
  type: 'GET_SUCCESS',
  payload: {
    currencies,
  },
});

export const getApiError = (error) => ({
  type: 'GET_ERROR',
  payload: {
    error,
  },
});

export const addExpense = (expenses) => ({
  type: 'NEW_EXPENSES',
  expenses,
});

export const getApiThunk = () => (dispatch) => {
  dispatch(getApi());
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((res) => {
      res.json().then((data) => {
        dispatch(getApiSuccess(data));
      });
    })
    .catch(() => { dispatch(getApiError()); });
};

// Referência Thunk: https://github.com/tryber/sd-10a-live-lectures/blob/lecture/16.4/iss-location/src/actions/index.js;

export const fetchCoin = (expense) => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const coin = await response.json();
  const expenseActual = {
    ...expense,
    exchangeRates: coin,
  };
  dispatch(addExpense(expenseActual));
};

// Referência: ajuda do colega Tiago Emanuel para realizar fetchCoin;

export const removeExpense = (id) => ({
  type: 'REMOVE_ITEM',
  id,
});
