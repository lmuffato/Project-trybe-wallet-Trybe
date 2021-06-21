import {
  WALLET,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  const { currance, expenses } = action;
  switch (action.type) {
  case WALLET:
    return {
      ...state,
      currencies: [...currance, currance],
      expenses: [...expenses, expenses],
    };
  default:
    return state;
  }
};

export default wallet;
