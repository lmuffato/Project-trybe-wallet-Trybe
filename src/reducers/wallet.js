const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ALGUMA_COISA':
    return state;
  default:
    return state;
  }
};

export default walletReducer;
