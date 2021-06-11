const INITIAL_STATE = {
  user: { email: '' },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_CURRENCIE':
    return { ...state };
  default:
    return state;
  }
}
