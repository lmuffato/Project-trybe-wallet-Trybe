// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_DATA, GET_DATA_ERROR, GET_DATA_SUCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: '',
};

function wallet(state = INITIAL_STATE, { payload, type }) {
  switch (type) {
  case GET_DATA:
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
  case GET_DATA_ERROR:
    return {
      ...state,
      error: 'Deu ruim',
      isLoading: false,
    };
  default:
    return state;
  }
}

export default wallet;
