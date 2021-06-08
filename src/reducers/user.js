const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const LOGIN = 'LOGIN';

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return { ...state, email: action.email };
  default:
    return state;
  }
}

export default user;
