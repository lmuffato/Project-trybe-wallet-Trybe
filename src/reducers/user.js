// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

export default function movieReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_EMAIL':
    return {
      email: action.email,
      ...state,
    };
  default:
    return state;
  }
}
