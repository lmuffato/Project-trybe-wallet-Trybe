// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  ADD_OUTLAY,
  REMOVE_OUTLAY,
  EDIT_OUTLAY,
} from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_OUTLAY:
    return state;
  case REMOVE_OUTLAY:
    return state;
  case EDIT_OUTLAY:
    return state;
  default:
    return state;
  }
}

export default user;
