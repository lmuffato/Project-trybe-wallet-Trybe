// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIES_REQUEST } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCIES_REQUEST:
    return { ...state, currencies: action.payload.currencies };
  default: return state;
  }
}

export default wallet;
