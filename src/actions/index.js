export const LOGIN = 'LOGIN';
export const RECEIVE_COINS = 'RECEIVE_COINS';
export const RECEIVE_EXPENSE = 'RECEIVE_EXPENSE';

export const loginAction = (email) => ({
  type: 'LOGIN',
  email,
});

export const receiveCoins = (currencies) => ({
  type: RECEIVE_COINS,
  currencies,
});

export const receiveExpenses = (expense, currencies) => ({
  type: RECEIVE_EXPENSE,
  expense,
  currencies,
});

export const fetchCoinCodes = () => async (dispatch) => {
  const currencies = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currenciesParse = await currencies.json();
  dispatch(receiveCoins(currenciesParse));
};

export const addExpenseAction = (expense) => async (dispatch) => {
  const currencies = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currenciesParse = await currencies.json();
  dispatch(receiveExpenses(expense, currenciesParse));
};
