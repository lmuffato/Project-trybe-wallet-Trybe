// Esse reducer será responsável por tratar as informações da pessoa usuária

const user = {
  email: '',
};

function userReducer(state = user, { type, email }) {
  switch (type) {
  case 'LOGIN':
    return { ...state, email };
  default:
    return state;
  }
}

export default userReducer;
