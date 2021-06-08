const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function userWallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case INITIAL_STATE:
    return { ...state };
  default:
    return state;
  }
}

export default userWallet;
