// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { wallet: { currencies } = [], type }) => {
  switch (type) {
  case RECEIVE_CURRENCIES:
    return {
      ...state,
      currencies: state.currencies.concat(Object.values(currencies)),
    };
  default:
    return state;
  }
};

export default wallet;
