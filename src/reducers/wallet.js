// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  EXPENSES_ADD,
  EXPENSES_VALUES,
  EXPENSES_DESCRIPTIONS,
  CURRENCIES,
  CURRENCY,
  EXPENSES_DEL,
  EXPENSES_TAG,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: {},
  expenses: [],
  value: 0,
  description: '',
  currency: 'USD',
  tag: 'Alimentação',
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCIES:
    return { ...state, currencies: action.payload };
  case EXPENSES_VALUES:
    return { ...state, value: action.payload };
  case EXPENSES_DESCRIPTIONS:
    return { ...state, description: action.payload };
  case CURRENCY:
    return { ...state, currency: action.payload };
  case EXPENSES_DEL:
    return { ...state,
      expenses: state.expenses
        .filter((exp) => exp.id !== Number(action.payload)) };
  case EXPENSES_TAG:
    return { ...state, tag: action.payload };
  case EXPENSES_ADD:
    return { ...state, expenses: state.expenses.concat(action.payload) };
  default:
    return state;
  }
}
