// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES_SUCCESS, GET_CURRENCIES_ERROR } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES_SUCCESS:
    return { ...state, currencies: action.payload };
  case GET_CURRENCIES_ERROR:
    return state;
  case 'ADD_EXPENSE':
    return state;
  default:
    return state;
  }
}

export default wallet;
