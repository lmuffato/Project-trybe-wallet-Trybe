// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCY, WALLET, ADD_EXPENSE } from '../actions';

const WALLET_INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = WALLET_INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET:
    return { ...state, action };
  case ADD_CURRENCY:
    return { ...state, currencies: action.payload.currencies };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses,
        { ...action.stateExpense, ...action.response }],
    };
  default:
    return { ...state };
  }
};

export default wallet;
