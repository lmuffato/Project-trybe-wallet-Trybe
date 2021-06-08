// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case 'LOGIN':
    return { email: payload };
  default:
    return state;
  }
}

export default user;
