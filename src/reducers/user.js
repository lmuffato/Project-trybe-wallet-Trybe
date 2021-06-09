// Esse reducer será responsável por tratar as informações da pessoa usuária

import { ADD_USER } from '../actions/actionsTypes';

const INNITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const user = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_USER:
    return state;
  default:
    return state;
  }
};

export default user;
