const INICIAL_STATE = {
  user: {
    email: '',
  },
};

function userData(state = INICIAL_STATE, action) {
  switch (action.type) {
  case 'INITIAL_STATE':
    return {
      ...state,
    };
  default:
    return state;
  }
}

export default userData;
