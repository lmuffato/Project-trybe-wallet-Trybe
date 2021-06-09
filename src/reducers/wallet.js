// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  GET_DATA,
  GET_DATA_ERROR,
  GET_DATA_SUCESS,
  ADD_DESPESA,
  ADD_DESPESA_SUCESS,
  ADD_DESPESA_ERROR,
  DETELE_DESPESA,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: '',
};

function wallet(state = INITIAL_STATE, { payload, type }) {
  switch (type) {
  case GET_DATA || ADD_DESPESA:
    return {
      ...state,
      isLoading: true,
    };
  case GET_DATA_SUCESS:
    return {
      ...state,
      currencies: payload,
      isLoading: false,
    };
  case GET_DATA_ERROR || ADD_DESPESA_ERROR:
    return {
      ...state,
      error: 'Deu ruim',
      isLoading: false,
    };
  case ADD_DESPESA_SUCESS:
    return {
      ...state,
      expenses: [...state.expenses, payload],
      isLoading: false,
    };
  case DETELE_DESPESA:
    return {
      ...state,
      expenses: payload,
    };
  default:
    return state;
  }
}

export default wallet;
