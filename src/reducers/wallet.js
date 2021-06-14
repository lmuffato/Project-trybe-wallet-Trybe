// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_MONEY, REQUEST_API } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      load: true,
    };
  case GET_MONEY:
    return {
      ...state,
      currencies: action.payload.currencies,
      load: false,
    };
  default:
    return state;
  }
}

export default wallet;
