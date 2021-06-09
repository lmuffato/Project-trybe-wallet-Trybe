const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
    totalValue: 0,
  },
};

const LOGIN = 'LOGIN';

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return state;
  default:
    return state;
  }
}

export default wallet;
