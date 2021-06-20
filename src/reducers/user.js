const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'xablau':
    return state;
  default:
    return state;
  }
};

export default user;
