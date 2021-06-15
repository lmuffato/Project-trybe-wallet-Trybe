// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_COINS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_COINS:
    // console.log(action);
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
}

export default walletReducer;
