// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN':
    return { ...state,
      email: state.user.email.concat(action.payload.email),
      password: state.user.password.concat(action.payload.password),
    };
  default:
    return state;
  }
}

export default user;
