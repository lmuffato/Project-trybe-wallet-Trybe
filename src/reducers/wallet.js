const ADD_WALLET = 'ADD_WALLET';

const initialState = {
  currencies: [], // moedas
  expenses: [], // despesas
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case ADD_WALLET:
    return [...state];
  default:
    return state;
  }
}

export default wallet;
