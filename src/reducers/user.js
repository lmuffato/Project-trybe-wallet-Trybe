// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_EMAIL':
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
}

export default userReducer;
