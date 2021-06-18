// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const SET_CURRENCIES = 'SET_CURRENCIES';
export const SET_EXPENSES = 'SET_EXPENSES';
export const addEmail = (payload) => ({
  type: ADD_EMAIL,
  payload,
});
export const currenciesAction = (payload) => ({
  type: CURRENCIES,
  payload,
});

export const expensesAction = (payload) => ({
  type: EXPENSES,
  payload,
});

export const getApiThunk = () => (dispatch) => {
  getApi().then((res) => {
    if (res.USDT) {
      delete res.USDT;
    }
    dispatch(currenciesAction(Object.keys(res)));
  });
};

export const expensesActionThunk = (state) => (dispatch) => {
  getApi()
    .then((response) => {
      const expenses = {
        ...state,
        exchangeRates: response,
      };
      dispatch(expensesAction(expenses));
    });
};
