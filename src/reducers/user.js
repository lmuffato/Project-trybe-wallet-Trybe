const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'LOGIN':
    return { ...state, user: { ...state.user, email: action.payload.email } };
  default:
    return state;
  }
};

export default user;
