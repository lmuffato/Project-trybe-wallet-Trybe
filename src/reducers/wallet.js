import { WALLET, API_SUCESSED, API_FAIL, ADD_EXPENSES } from '../actions/index';
// REQUISITO 7 foi relaziado com ajuda do meu querido colega Luan Ramalho 10a.
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: null,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET:
    return ({
      ...state,
      isLoading: true,
    });
  case API_SUCESSED:
    return ({
      ...state,
      currencies: action.payload,
      isLoading: false,
    });
  case API_FAIL:
    return ({
      ...state,
      error: action.payload.error,
      isLoading: false,
    });
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return {
      ...state,
    };
  }
};

export default wallet;
