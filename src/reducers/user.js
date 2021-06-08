const INITIAL_STATE = {
  user: {
    email: '',
  }
};

function user(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'LOGIN':
      return state;
    default:
      return state;
  };
};

export default user;
