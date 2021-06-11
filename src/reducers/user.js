const INITIAL_STATE = {
  user: { email: '' },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SIGN_IN':
    return { ...state, user: action.state };
  default:
    return state;
  }
}

export default userReducer;
