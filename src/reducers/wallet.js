// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCIES, ADD_TO_WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  expenseId: 0,
};

const wallet = (
  state = INITIAL_STATE, { wallet: { currencies, expenses } = [], type },
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
  default:
    return state;
  }
};

export default wallet;
