// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_CURRENCIES } from '../actions';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
};

const userWallet = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
      currencies: [...state.currencies, ...action.payload],
    };
  default:
    return state;
  }
};

export default userWallet;
