// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

export default function movieReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'GET_EMAIL':
    return {
      user: {
        email: action.email,
      },
      ...state,
    };
  default:
    return state;
  }
}
