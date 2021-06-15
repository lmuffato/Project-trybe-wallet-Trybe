import { RECEIVE_CURRENCIES } from '../actions/wallet';

const INITIAL_STATE = {
  currencies: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVE_CURRENCIES:
    return { currencies: action.currencies };
  default:
    return state;
  }
}
export default wallet;
