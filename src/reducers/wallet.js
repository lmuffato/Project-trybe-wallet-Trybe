import {
  GET_CURRENCIES_API, GET_CURRENCIES_API_SUCCESS,
  GET_CURRENCIES_API_ERROR, WALLET, DELETE_ID,
} from '../actions';

const initialState = {
  currencies: [], // moedas
  expenses: [], // despesas
  error: null,
  isLoading: true,
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case GET_CURRENCIES_API:
    return { ...state, isLoading: true };
  case GET_CURRENCIES_API_SUCCESS:
    return { ...state, isLoading: false, currencies: action.payload.currencies };
  case GET_CURRENCIES_API_ERROR:
    return { ...state, isLoading: false, error: action.payload.error };
  case WALLET:
    return { ...state, isLoading: false, expenses: [...state.expenses, action.payload] };
  case DELETE_ID:
    return { ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload) }; // ô chute bem dado kkkk, era só para deletar o id do estado ,mais também subtrai o valor também kkk
  default:
    return state;
  }
}

export default wallet;
