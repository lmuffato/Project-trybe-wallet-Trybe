// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  SUM_EXPENSES,
  PAYMENT_METHOD,
} from '../actions/index';

const INITIAL_STATE = {
  totalExpenses: '0',
  method: 'Dinheiro',
};

export default function wallet2(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SUM_EXPENSES:
    return { ...state, totalExpenses: action.payload };
  case PAYMENT_METHOD:
    return { ...state, method: action.payload };
  default:
    return state;
  }
}
