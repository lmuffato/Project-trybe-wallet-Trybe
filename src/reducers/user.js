const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'NEW_EMAIL':
    return { email: action.payload };
  default:
    return state;
  }
}

export default user;
