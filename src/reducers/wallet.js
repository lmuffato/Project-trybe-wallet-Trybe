// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  loading: false,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'CURRENCIES_FETCH':
    return { ...state, currencies: action.currencies };
  case 'EXPENSES':
    return { ...state, email: action.expenses };
  case 'LOADING':
    return { ...state, loading: true };
  default:
    return state;
  }
}

export default wallet;
