const GET_VALUE = {
  currencies: [],
  expenses: [],
};

const value = (state = GET_VALUE, action) => {
  switch (action.type) {
  case 'WALLET':
    return { ...state };
  default:
    return state;
  }
};

export default value;
