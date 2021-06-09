// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
  qtd: 0,
  total: 0.00,
};

export default function user(state = initialState, action) {
  switch (action.type) {
  case 'SET_WALLET':
    return {
      ...state,
      currencies: action.payload.currencies,
    };
  case 'NEW_EXPENSE':
    return {
      ...state,
      expenses: [{ ...state.expenses }, action.payload.expenses],
      total: action.payload.total,
    };
  case 'ADD_QTD':
    return { qtd: state.qtd + 1 };
  default:
    return state;
  }
}
