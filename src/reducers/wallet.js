// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
};

export default function user(state = initialState, action) {
  switch (action.type) {
  case 'SET_WALLET':
    return {
      ...state,
      currencies: action.payload.currencies,
      expenses: action.payload.expenses,
    };
  default:
    return state;
  }
}
