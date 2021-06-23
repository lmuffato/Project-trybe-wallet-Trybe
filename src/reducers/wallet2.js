// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  SUM_EXPENSES,
  UPDATE_SUM_AFTER_DEL_EXP,
  PAYMENT_METHOD,
  EXPENSES_TAG,
} from '../actions/index';

const INITIAL_STATE = {
  totalExpenses: 0,
  method: 'Dinheiro',
  tag: 'Alimentação',
  updateSum: '',
};

export default function wallet2(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SUM_EXPENSES:
    return { ...state, totalExpenses: action.payload };
  case UPDATE_SUM_AFTER_DEL_EXP:
    return { ...state, updateSum: action.payload };
  case PAYMENT_METHOD:
    return { ...state, method: action.payload };
  case EXPENSES_TAG:
    return { ...state, tag: action.payload };
  default:
    return state;
  }
}
