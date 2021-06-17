const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};
  
function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ACTION_LOGIN':
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}

export default user;
