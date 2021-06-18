const INITIAL_STATE = {
  email: 'exemplo@example.com',
  password: 'projetoredux',
  isAuth: false,
  isLoading: false,
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN_SUCCESS': {
    const { payload: { isAuth } } = action;

    return { ...state, isAuth };
  }
  case 'LOGOUT':
    return false;
  default:
    return state;
  }
}

export default user;
