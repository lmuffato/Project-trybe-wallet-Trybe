import {
  GET_CURRENCY,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
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
