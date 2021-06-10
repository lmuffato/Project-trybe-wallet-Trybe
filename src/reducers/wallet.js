import { RECEIVE_COINS } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_COINS: return { ...state, wallet: { currencies: Object.keys(action.currencies) } };
  default: return state;
  }
};

export default wallet;
