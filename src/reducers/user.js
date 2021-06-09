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

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_EMAIL':
    return {
      ...INITIAL_STATE,
    };
  default:
    return state;
  }
};

export default userReducer;
