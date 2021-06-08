const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'TESTE':
    return state;
  default:
    return state;
  }
};

export default walletReducer;
