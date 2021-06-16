const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'TYPE_EMAIL':
    return { email: action.payload };
  default:
    return state;
  }
}

export default userReducer;
