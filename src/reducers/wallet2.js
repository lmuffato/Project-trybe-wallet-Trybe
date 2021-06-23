// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  SUM_EXPENSES,
  CLEAR_INPUTS,
} from '../actions/index';

const INITIAL_STATE = {
  totalExpenses: '0',
  clearInputs: false,
};

export default function wallet2(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SUM_EXPENSES:
    return { ...state, totalExpenses: action.payload };
  case CLEAR_INPUTS:
    return { ...state, clearInputs: action.payload };
  default:
    return state;
  }
}
