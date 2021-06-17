// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_COINS, RATES, EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_COINS:
    // console.log(action);
    return { ...state, currencies: action.payload };
  case RATES:
    console.log('rates here.');
    return { ...state, expenses: action.payload };
  case EXPENSE:
    console.log('expense here.');
    return { ...state, ...{ expenses: action.payload } };
  default:
    return state;
  }
}

export default walletReducer;
