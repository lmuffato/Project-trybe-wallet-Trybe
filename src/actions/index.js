// Coloque aqui suas actions
import { currenciesFetch, responseWithoutUSDT } from '../services/fetchApi';

export const ADD_USER = 'ADD_USER';
export const ADD_COINS = 'ADD_COINS';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addUser = (email) => ({
  type: ADD_USER,
  payload: {
    email,
  },
});

export const addCoins = (payload) => ({
  type: ADD_COINS,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

// Para o thunk contei com o auxílio do repositório do Renzo Sevilha.
// E também do link: https://redux.js.org/tutorials/fundamentals/part-6-async-logic
export const getCoinsThunk = () => async (dispatch) => {
  const response = await currenciesFetch();
  const coinsFiltered = responseWithoutUSDT(response);
  dispatch(addCoins(coinsFiltered));
};

export const getCoinsOnClick = (expense) => async (dispatch) => {
  const exchangeRates = await currenciesFetch();
  const expenseToAdd = {
    ...expense,
    exchangeRates,
  };
  dispatch(addExpense(expenseToAdd));
};
