const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ALGUMA_COISA':
    return state;
  default:
    return state;
  }
};

export default wallet;
