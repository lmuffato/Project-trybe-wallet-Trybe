// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCIES, ADD_EXPENSES } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_CURRENCIES:
    return { ...state,
      currencies: [...state.wallet.currencies, action.payload.currencies] };
  case ADD_EXPENSES:
    return { ...state,
      expenses: [...state.wallet.expenses, action.payload.expenses] };
  default:
    return state;
  }
}

export default walletReducer;
