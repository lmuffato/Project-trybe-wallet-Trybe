const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOGIN':
    console.log(action);
    return { email: action.state };

  default:
    return state;
  }
}
export default user;
