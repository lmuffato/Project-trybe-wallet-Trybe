// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CREATE_EXPENSE } from '../actions/index';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CREATE_EXPENSE:
    return {
      ...state,
      expenses: action.payload.expenses,
    };
  default:
    return state;
  }
}
