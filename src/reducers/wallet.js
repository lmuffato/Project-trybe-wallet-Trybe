// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { EXPENSES, CURRENCIES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],

};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCIES:
    return { ...state, currencies: action.payload };
  case EXPENSES:
    return { ...state, expenses: action.payload };
  default:
    return state;
  }
}
