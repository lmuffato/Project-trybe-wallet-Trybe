// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCY, EXPENSES } from '../actions';

const wallet = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = wallet, action) {
  switch (action.type) {
  case CURRENCY:
    return { ...state, currencies: action.values };
  case EXPENSES:
    return { ...state, expenses: [...state.expenses, action.values] };
  default:
    return state;
  }
}

export default walletReducer;
