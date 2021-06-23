import { GET_CURRENCY, GET_CURRENCY_SUCCESS } from '../actions/wallet';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCY:
    return {
      ...state,
    };
  case GET_CURRENCY_SUCCESS:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
