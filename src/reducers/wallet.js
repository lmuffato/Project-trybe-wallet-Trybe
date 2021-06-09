// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { ADD_EXPENSE } from '../actions/actionsTypes';

const INNITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return state;
  default:
    return state;
  }
};

export default wallet;
