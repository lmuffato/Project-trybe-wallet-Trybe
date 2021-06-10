// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// mport {
import {
  REQUEST_CURRENCIES, RECEIVE_CURRENCIES,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: false,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return { ...state };
  case RECEIVE_CURRENCIES: {
    const keys = Object.keys(action.payload);
    const filteredKeys = keys.filter((key) => key !== 'USDT');
    return { ...state, currencies: filteredKeys };
  }
  default:
    return state;
  }
}

export default wallet;
