// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET, ADD_CURRENCIES } from '../actions/index';

const WALLET_INITIAL_STATE = {

  currencies: [],
  expenses: [],

};

const wallet = (state = WALLET_INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET:
    return { ...state, action };

  case ADD_CURRENCIES:
    return { ...state, currencies: action.payload.currencies };

  default:
    return { ...state };
  }
};

export default wallet;
