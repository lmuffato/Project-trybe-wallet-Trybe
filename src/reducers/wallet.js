// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
  total: 0,
  loading: true,
};
export default function wallet(state = initialState, action) {
  switch (action.type) {
  case 'SET_EXPENSES':
    return { ...state,
      currencies: [...state.currencies],
      expenses: [...state.expenses, action.payload.expenses],
      id: state.id + action.payload.id,
      total: state.total + action.payload.total,
      loading: action.payload.loading,
    };
  default:
    return state;
  }
}
