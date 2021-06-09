// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_CURRENCIES,
  RESOLVED_CURRENCIES,
  REJECT_CURRENCIES,
} from '../actions/index';

const INITIAL_STATE = {
  loadingCurrencies: false,
  loadingExpense: false,
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state, loadingCurrencies: true };
  case RESOLVED_CURRENCIES:
    return { ...state, loadingCurrencies: false, currencies: action.currency };
  case REJECT_CURRENCIES:
  default:
    return state;
  }
};

export default wallet;
