const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN':
    return { state: action.state };
  default:
    return state;
  }
}
export default userReducer;
