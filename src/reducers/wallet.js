import { WALLET } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET:
    return { ...state, currencies: action, expenses: action };
  default:
    return state;
  }
};

export default user;
