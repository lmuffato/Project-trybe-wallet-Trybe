export const LOGIN = 'LOGIN';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';

export const requestCurrency = () => ({ type: REQUEST_CURRENCY });

export const ADD_EXPENSES = 'ADD_EXPENSES';

export const addExpenses = (expenses) => ({ type: ADD_EXPENSES, expenses });

export const addExpensesWithCurrency = (formValues) => async (dispatch) => {
  dispatch(requestCurrency());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const newExpense = { ...formValues, exchangeRates: data };
  return dispatch(addExpenses(newExpense));
};
