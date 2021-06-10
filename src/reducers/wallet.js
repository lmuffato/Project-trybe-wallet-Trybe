import { RECEIVE_CURRENCIES } from '../actions/index';

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCIES:
    return {
      ...state,
      currencies: state.currencies.concat(action.currencies),
    };
  default:
    return { ...state };
  }
};

export default userReducer;
