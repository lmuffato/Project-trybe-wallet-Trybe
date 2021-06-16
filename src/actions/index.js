const signIn = (state) => ({ type: 'SIGN_IN', state });
export default signIn;

export const SIGN_IN = 'SIGN_IN';
export const ADD_CURRENCIE = 'ADD_CURRENCIE';
export const REQUESTED_API = 'REQUESTED_API';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const GET_EXCHANGE = 'GET_EXCHANGE';
export const GET_EXCHANGE_RATE = 'GET_EXCHANGE_RATE';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const SUM_VALUES = 'SUM_VALUES';

export const addCurrencies = (wallet) => ({ type: ADD_CURRENCIE, wallet });

export const requestedApi = () => ({ type: REQUESTED_API, isFetching: true });

export const requestSuccess = () => ({ type: REQUEST_SUCCESS, isFetching: 'success' });

export const requestError = () => ({ type: REQUEST_ERROR, isFetching: 'error' });

export const getExchange = (exchanges) => ({ type: GET_EXCHANGE, exchanges });

const sumExpenses = (expenses) => {
  const expensesValues = expenses.map((expense) => {
    const findEX = Object.values(expense.exchangeRates)
      .filter((EX) => EX.code === expense.currency).shift();
    return Number(expense.value) * Number(findEX.ask);
  });
  const sum = expensesValues.reduce((v1, v2) => v1 + v2, 0);
  return sum;
};
export const sumValues = (expenses) => ({ type: SUM_VALUES, sum: sumExpenses(expenses) });

export const getExchangeRate = (exRa) => (
  { type: GET_EXCHANGE_RATE, exRa }
);

export const addExpense = (expense) => ({ type: ADD_EXPENSE, expense });

export const fetchExchangeRate = (index) => async (dispatch) => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await request.json();
  return dispatch(getExchangeRate({ value: currencies, id: index }));
};
