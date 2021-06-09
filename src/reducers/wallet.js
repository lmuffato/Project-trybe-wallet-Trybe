// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// lembrar de importar a action
import { GET_CURRENCIES, GET_CURRENCIES_SUCESS } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state };
  case GET_CURRENCIES_SUCESS:
    return {
      ...state,
      wallet: {
        ...state.wallet,
        currencies: action.payload.response,
      },
    };
  default:
    return state;
  }
};

export default wallet;
