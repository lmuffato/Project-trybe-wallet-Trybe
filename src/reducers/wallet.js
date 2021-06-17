import { CURRENCIES } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CURRENCIES:
      return {
        ...state,
        currencies: payload,
      };
    default:
      return state;
  }
};