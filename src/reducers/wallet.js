// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],

};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET:
    return { wallet: action.wallet };
  default: return state;
  }
};

export default wallet;
