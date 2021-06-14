import { SET_CURRENCIES } from '../actions/actionsType';

const INITIAL_STATE = {
  currencies: null,
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SET_CURRENCIES:
    return {
      ...state,
      currencies: payload,
    };

  default:
    return state;
  }
};

export default wallet;
