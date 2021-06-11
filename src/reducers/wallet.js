// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, { wallet: { currencies } = [], type }) => {
  switch (type) {
  case RECEIVE_CURRENCIES:
    return {
      ...state,
      // currencies: Object.keys(currencies).forEach((key) => state.wallet.currencies.push({
      //   name: key,
      //   value: currencies[key],
      // })),
      currencies: state.wallet.currencies.concat(Object.values(currencies)),
    };
  default:
    return state;
  }
};

export default wallet;
