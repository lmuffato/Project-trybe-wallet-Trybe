// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_CURRENCIES,
  RESOLVED_CURRENCIES,
  REJECT_CURRENCIES,
  RESOLVED_EXPENSE,
} from '../actions/index';

const INITIAL_STATE = {
  loadingCurrencies: false,
  loadingExpense: false,
  currencies: [],
  expenses: [],
};

const adicionarId = (state, expense) => ({ ...expense, id: (state.length) });

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, loadingCurrencies: true };
  case RESOLVED_CURRENCIES:
    return { ...state, loadingCurrencies: false, currencies: action.currency };
  case REJECT_CURRENCIES:
  case RESOLVED_EXPENSE:
    return {
      ...state,
      loadingExpense: false,
      expenses: [...state.expenses, adicionarId(state.expenses, action.expense)],
    };
  default:
    return state;
  }
};

export default wallet;
