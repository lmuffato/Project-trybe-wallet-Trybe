const INITIAL_STATE = {
  something: '',
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SOMETHING':
    return null;
  default:
    return state;
  }
}

export default walletReducer;
