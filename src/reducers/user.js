// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '',
};

// Referência: https://blog.rocketseat.com.br/redux-o-passo-a-passo/
const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'HANDLE_EMAIL':
    return { email: action.email };
  default:
    return state;
  }
};

export default user;
