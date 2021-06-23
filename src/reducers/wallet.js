import { WALLET_MONEY } from '../actions';

const INITIAL_STATE = {
  money: '',
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case WALLET_MONEY:
    return { ...state, money: payload };
  default:
    return state;
  }
};

export default wallet;
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
