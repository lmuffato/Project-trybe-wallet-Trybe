const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case 'LOGIN_ACTION':
    return {
      ...state,
      email: payload,
    };
  default:
    return state;
  }
}

export default userReducer;
