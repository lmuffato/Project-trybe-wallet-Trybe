import INITIAL_STATE from '../constants/INITIAL_STATE';
import ACTIONS from '../constants/actions';

const walletReducer = (state = INITIAL_STATE.wallet, action) => {
  const { type, currencies } = action;
  switch (type) {
  case ACTIONS.GET_CURRENCIES:
    return { ...state, currencies: [...state.currencies, ...Object.values(currencies)] };
  default:
    return state;
  }
};

export default walletReducer;
