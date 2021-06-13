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
