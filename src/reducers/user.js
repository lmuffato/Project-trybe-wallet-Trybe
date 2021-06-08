// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_USER': return state;
  default: return state;
  }
};

export default userReducer;
