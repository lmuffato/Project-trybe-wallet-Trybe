const INITIAL_STATE = {
  state: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'Test':
    return { state: action.state };
  default:
    return state;
  }
}

export default userReducer;
