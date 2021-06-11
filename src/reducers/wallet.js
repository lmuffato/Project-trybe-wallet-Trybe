// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_CURRENCY } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_CURRENCY:
    return { ...state, currencies: action.payload.currencies };

  default:
    return state;
  }
};
export default wallet;
