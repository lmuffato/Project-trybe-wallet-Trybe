import fetchCurrencies from '../api/api';

// Coloque aqui suas actions
export const loginAction = (email) => ({
  type: 'LOGIN',
  email,
});

const addExpensesAction = (expenses) => ({
  type: 'ADD_EXPENSES',
  expenses,
});

const requestCurrencies = (currencies) => ({
  type: 'ADD_CURRENCIES',
  currencies,
});

export const updatedExpenses = (expenses) => ({
  type: 'UPDATER_EXPENSE',
  expenses,
});

export const editExpense = (edit) => ({
  type: 'EDIT_EXPENSE',
  edit,
});

export function getCurruencies() {
  return async (dispatch) => {
    const data = await fetchCurrencies();
    const newArr = Object.keys(data);
    const currenciesArray = newArr.filter((moeda) => moeda !== 'USDT');
    dispatch(requestCurrencies(currenciesArray));
  };
}

export function addExpenses(expense) {
  return async (dispatch) => {
    dispatch(addExpensesAction(expense));
  };
}

export function addExchangeRates() {
  return async () => {
    const data = await fetchCurrencies();
    return console.log(data);
  };
}

const finishEditing = (expenses) => ({
  type: 'FINISH_EDITIG',
  expenses,
});

export function finishEditExpense(expenses) {
  return async (dispatch) => {
    dispatch(finishEditing(expenses));
  };
}
