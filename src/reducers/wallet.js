import { EXANGE_RATES, GET_CURRENCIES, SAVE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  currentExangeRates: {},
  total: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES: {
    const { payload } = action;
    const currencies = Object.keys(payload).filter((currency) => currency !== 'USDT');
    return { ...state, currencies };
  }
  case EXANGE_RATES:
    return { ...state, currentExangeRates: action.payload };

  case SAVE_EXPENSES: {
    const total = action.payload.reduce((acc, { value, currency, exchangeRates }) => (
      acc + parseFloat(value * exchangeRates[currency].ask)), 0);
    return { ...state, expenses: action.payload, total };
  }
  default:
    return state;
  }
};

export default wallet;
