import {
  CURRENCIES,
  CURRENCIES_SUCCESS,
  ADD_EXPENSES_SUCCESS,
  CURRENCIES_ERROR,
  DELETE_EXPENSES_SUCCESS,
} from '../actions/wallet';

import totalExpenses from '../helpers/totalExpenses';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpense: 0,
  isLoading: false,
  error: null,
};

function wallet(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case CURRENCIES: {
    const { expenses } = state;
    const totalExpense = totalExpenses(expenses);
    return { ...state, isLoading: true, error: null, totalExpense };
  }
  case CURRENCIES_SUCCESS:
    return {
      ...state,
      isLoading: false,
      error: null,
      currencies: payload,
    };
  case ADD_EXPENSES_SUCCESS: {
    const index = state.expenses.length;
    const lastId = state.expenses[index] ? state.expenses[index].id : index - 1;
    payload.id = lastId ? index : lastId + 1;

    const newExpenses = state.expenses.concat(payload);
    const totalExpense = totalExpenses(newExpenses);

    return {
      ...state,
      isLoading: false,
      error: null,
      expenses: newExpenses,
      totalExpense,
    };
  }
  case CURRENCIES_ERROR:
    return { ...state, error: payload };
  case DELETE_EXPENSES_SUCCESS: {
    const deletedExpense = state.expenses.find(({ id }) => id === payload);
    const newExpenses = state.expenses.filter(({ id }) => id !== payload);
    const { value, currency } = deletedExpense;
    const exchangeRate = deletedExpense.exchangeRates[currency];
    const cambio = parseFloat(exchangeRate.ask);
    const convertedValue = value * cambio;
    const totalExpense = parseFloat((state.totalExpense - convertedValue).toFixed(2));

    return { ...state, expenses: newExpenses, totalExpense };
  }
  default:
    return { ...state };
  }
}

export default wallet;
