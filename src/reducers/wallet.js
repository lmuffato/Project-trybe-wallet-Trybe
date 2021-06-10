// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: null,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LOADING_REQUEST':
    return {
      ...state,
      isLoading: true,
    };
  case 'SUCCESS_REQUEST':
    return {
      ...state,
      currencies: action.data,
    };
  default:
    return state;
  }
}

export default walletReducer;
