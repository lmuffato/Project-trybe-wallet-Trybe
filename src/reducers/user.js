// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE_USER = {
  user: {
    email: '',
  },
};

const userLogin = (state = INITIAL_STATE_USER, action) => {
  switch (action.type) {
  case 'action':
    return state;
  default:
    return state;
  }
};

export default userLogin;
