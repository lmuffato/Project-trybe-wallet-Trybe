const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'TESTE':
    return state;
  default:
    return state;
  }
};

export default userReducer;
