import { GET_CURRENCIES_SUCCESS, GET_CURRENCIES_ERROR } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: null,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES_SUCCESS: {
    const keys = Object.keys(action.payload);
    const arrayWithoutUSDT = keys.filter((key) => key !== 'USDT');
    return {
      ...state,
      currencies: arrayWithoutUSDT,
    };
  }
  case GET_CURRENCIES_ERROR:
    return {
      ...state,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
