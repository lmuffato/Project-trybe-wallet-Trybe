// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  RECEIVE_CURRENCIES,
  ADD_TO_WALLET,
  TOTAL_VALUE,
  DELETE_TO_WALLET,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  expenseId: 0,
  totalValue: 0,
};

const wallet = (
  state = INITIAL_STATE, { wallet: { currencies, expenses, totalValue } = [], type },
) => {
  switch (type) {
  case RECEIVE_CURRENCIES:
    return {
      ...state,
      currencies,
    };
  case ADD_TO_WALLET:
    return {
      ...state,
      expenses: state.expenses.concat(expenses),
      expenseId: state.expenseId + 1,
    };
  case DELETE_TO_WALLET:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== Number(expenses.id)),
      expenseId: state.expenseId - 1,
    };
  case TOTAL_VALUE:
    return {
      ...state,
      totalValue,
    };
  default:
    return state;
  }
};

export default wallet;
