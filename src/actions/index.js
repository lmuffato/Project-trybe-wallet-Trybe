import walletAPI from '../services/api';

// Coloque aqui suas actions
export const USER = 'USER';
export const WALLET = 'WALLET';
export const ADD_CURRENCY = 'ADD_CURRENCY';
export const ADD_EXPENSE = 'ADD_EXPENSE';

export const user = (payload) => ({
  type: 'USER',
  payload,
});

export const wallet = (payload) => ({
  type: 'WALLET',
  payload,
});

export const addWalletCurrency = (payload) => ({
  type: 'ADD_CURRENCY',
  payload,
});

export const addWalletExpense = (response, stateExpense) => ({
  type: 'ADD_EXPENSE',
  response,
  stateExpense,
});

export const apiWalletThunk = () => (dispatch) => {
  walletAPI()
    .then((response) => {
      dispatch(addWalletCurrency({
        currencies: response,
      }));
    });
};

export const apiExpensesThunk = (state) => (dispatch) => {
  walletAPI()
    .then((response) => {
      const obj = { exchangeRates: response };
      dispatch(addWalletExpense(
        obj,
        state,
      ));
    });
};
