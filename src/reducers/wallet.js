import { WALLET_RATES } from '../actions/index';
import filteringData from '../services/filteringData';

const INITIAL_STATE = {
  currencies: [],
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case WALLET_RATES:
    return { ...state, currencies: filteringData(payload) };
  default:
    return state;
  }
};

export default wallet;
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
