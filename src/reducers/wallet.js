import {
  QUALQUER_COISA2,
} from '../actions/index';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case QUALQUER_COISA2:
    return {
      currencies: action.payload,
      expenses: action.payload,
    };
  default:
    return {
      ...state,
    };
  }
};

export default wallet;
