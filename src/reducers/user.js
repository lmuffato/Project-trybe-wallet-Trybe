const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'USER':
    return state;
  default:
    return state;
  }
}

export default user;
