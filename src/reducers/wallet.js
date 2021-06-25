// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { COINS_OPTION, REQUEST_API } from '../actions/index';

const WALLET_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
    loading: false,
  },
};

function wallet(state = WALLET_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      loading: true,
    };
  case COINS_OPTION:
    return {
      ...state,
      currencies: action.currencies,
      loading: false,
    };
  default:
    return state;
  }
}

export default wallet;
