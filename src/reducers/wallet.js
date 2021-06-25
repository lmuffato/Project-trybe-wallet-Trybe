// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, ADD_SPENDS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state, currencies: action.currency };
  case ADD_SPENDS:
    return { ...state, expenses: [...state.expenses, action.spends] };
  default:
    return state;
  }
};

export default wallet;
