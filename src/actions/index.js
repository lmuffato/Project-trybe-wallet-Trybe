export const USER_LOGIN = 'USER_LOGIN';
export const WALLET = 'WALLET';
export const TOTAL_VALUE = 'TOTAL_VALUE';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const COUNT_INCREMENT = 'COUNT_INCREMENT';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';

export const userAction = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const walletAction = (payload) => ({
  type: WALLET,
  payload,
});

export const totalValueAction = (payload) => ({
  type: TOTAL_VALUE,
  payload,
});

export const getCurrencies = (payload) => ({
  type: GET_CURRENCIES,
  payload,
});

export const fetchCurrenciesThunk = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    // const { USDT, ...data } = json;
    dispatch(getCurrencies(json));
  } catch (error) {
    console.error(error);
  }
};

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSES,
  payload,
});

export const countIncrement = () => ({
  type: COUNT_INCREMENT,
});

export const addExpensesThunk = (expenses, exchangeRates) => async (dispatch) => {
  try {
    await dispatch(fetchCurrenciesThunk());
    const newExpenses = { ...expenses, exchangeRates };
    await dispatch(addExpenses(newExpenses));
    await dispatch(countIncrement());
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
};
