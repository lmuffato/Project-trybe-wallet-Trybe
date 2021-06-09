const INITIAL_STATE = {
  email: '',
};
const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'LOGIN':
    return {
      email: action.payload,
    };
  default:
    return state;
  }
};

export default user;
