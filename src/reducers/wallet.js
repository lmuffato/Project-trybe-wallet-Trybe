// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { GET_CURRENCIES_SUCCESS, GET_CHOICED_PRODUCT } from '../actions/index';

const initialState = {
  currencies: ['BRL'],
  expenses: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case GET_CURRENCIES_SUCCESS:
    return { ...state, currencies: [...action.currencies] };
  case GET_CHOICED_PRODUCT:
    return { ...state, expenses: [...state.expenses, action.product] };
  default:
    return state;
  }
}

export default wallet;
