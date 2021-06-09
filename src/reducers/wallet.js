// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { QUALQUER_COISA2 } from '../actions/index';

const WALLET_INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = WALLET_INITIAL_STATE, action) => {
  switch (action.type) {
  case QUALQUER_COISA2:
    return { ...state, action };

  default:
    return { ...state };
  }
};

export default wallet;
