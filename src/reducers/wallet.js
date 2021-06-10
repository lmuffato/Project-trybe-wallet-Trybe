import { GET_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES: {
    const { payload } = action;
    const currencies = Object.keys(payload).filter((currency) => currency !== 'USDT');
    return { ...state, currencies };
  }
  default:
    return state;
  }
};

export default wallet;
