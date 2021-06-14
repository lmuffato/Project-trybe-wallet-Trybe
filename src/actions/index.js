export const USER = 'USER';
export const WALLET = 'WALLET';
export const API_SUCESSED = 'API_SUCESSED';
export const API_FAIL = 'API_FAIL';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const user = (payload) => ({
  type: USER,
  payload,
});

export const wallet = () => ({
  type: WALLET,
});

export const apiSucessed = (payload) => ({
  type: API_SUCESSED,
  payload,
});

export const apiFail = (payload) => ({
  type: API_FAIL,
  payload,
});

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const getExchange = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await response.json();
  return json;
};

export const apiCurrencyThunk = () => async (dispatch) => {
  dispatch(wallet());
  try {
    const getEx = await getExchange();
    dispatch(apiSucessed(getEx));
  } catch (error) {
    dispatch(apiFail(error));
  }
};

export const expensesThunk = (state) => async (dispatch) => {
  const exchangeRates = await getExchange();
  const expenses = {
    ...state,
    exchangeRates,
  };
  dispatch(addExpenses(expenses));
};
