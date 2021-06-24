// Esse reducer será responsável por tratar as informações da pessoa usuária
const INICIAL_STATE = {
  email: '',
};

function user(state = INICIAL_STATE, { user: { email } = {}, type }) {
  switch (type) {
  case 'LOGIN':
    return {
      ...state,
      email,
    };
  default:
    return state;
  }
}

export default user;
