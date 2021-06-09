// Coloque aqui suas actions

export const USER = 'USER_EMAIL';

export const CURRENCIES = 'CURRENCIES';

export const EXPENSES = 'EXPENSES';

export const EXCLUDE = 'EXCLUDE';

export const userAction = (payload) => ({
  type: USER,
  payload,
});

const currenciesAciton = (payload) => ({
  type: CURRENCIES,
  payload,
});

const expensesAction = (payload) => ({
  type: EXPENSES,
  payload,
});

export const excludeAction = (payload) => ({
  type: EXCLUDE,
  payload,
});

export const getCurrencies = () => async (dispatch) => {
  const fetched = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await fetched.json();
  const currencies = Object.keys(json);
  const filtered = currencies.filter((element) => element !== 'USDT');
  dispatch(currenciesAciton(filtered));
};

export const sendExpenses = (obj) => async (dispatch) => {
  const fetched = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await fetched.json();
  obj.exchangeRates = json;
  dispatch(expensesAction(obj));
};
