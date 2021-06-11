const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SIGN_IN':
    return { ...state, email: action.state };
  default:
    return state;
  }
};

export default userReducer;
