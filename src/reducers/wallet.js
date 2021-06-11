import { ADD_EXPENSE, ADD_CURRENCIE } from '../actions';

const INITIAL_STATE = {
  user: { email: '' },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

export default function walletReducer(state = INITIAL_STATE, action) {
  const { wallet } = state;
  const { wallet: { expenses } } = state;
  switch (action.type) {
  case ADD_CURRENCIE:
    return { ...state };
  case ADD_EXPENSE:
    return { ...state, wallet: { ...wallet, expenses: expenses.concat(action.expense) } };
  default:
    return state;
  }
}
