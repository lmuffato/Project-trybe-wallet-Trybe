// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoadingApi: false,
  errorApi: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'FETCH_API':
    return {
      ...state,
      isLoadingApi: true,
    };
  case 'FETCH_API_SUCCESS':
    return {
      ...state,
      isLoadingApi: false,
      currencies: action.payload.success,
    };
  case 'FETCH_API_ERROR':
    return {
      ...state,
      isLoadingApi: false,
      currencies: action.payload.error,
    };
  default: return state;
  }
};

export default wallet;
