// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_EMAIL': {
    const { payload } = action;

    return {
      ...state,
      email: payload,
    };
  }
  default:
    return state;
  }
};

export default userReducer;
