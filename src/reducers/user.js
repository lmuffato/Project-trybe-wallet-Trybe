const INITIAL_STATE = {
  user: {
    email: '',
  },
};

// Esse reducer será responsável por tratar as informações da pessoa usuária
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ALGUMA_COISA':
    return state;
  default:
    return state;
  }
};

export default userReducer;
