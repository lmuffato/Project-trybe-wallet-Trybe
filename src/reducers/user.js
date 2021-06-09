const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'CHECK_EMAIL':
    return { state: action.state };
  default:
    return state;
  }
}

export default userReducer;
