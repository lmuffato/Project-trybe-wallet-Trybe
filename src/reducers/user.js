// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',
  isDisabled: true,
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN':
    return {
      email: action.value,
      isDisabled: false,
    };
  default:
    return state;
  }
}

export default user;
