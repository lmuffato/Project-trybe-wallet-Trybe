const INITIAL_STATE = {
  state: '',
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ACTION':
    return state;
  default:
    return INITIAL_STATE;
  }
}

export default rootReducer;
