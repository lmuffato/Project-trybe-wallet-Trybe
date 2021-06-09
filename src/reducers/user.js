// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',
  // isDisabled: false,
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      email: action.value,
    };
  // case 'DISABLED':
  //   return {
  //     ...state,
  //     isDisabled: true,
  //   };
  default:
    return state;
  }
}

export default user;
