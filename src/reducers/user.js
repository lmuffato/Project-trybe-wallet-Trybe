// Esse reducer será responsável por tratar as informações da pessoa usuária

import { ADD_USER } from '../actions/actionsTypes';

const INNITIAL_STATE = {
  email: '',
};

const user = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_USER:
    return {
      ...state,
      email: action.user };
  default:
    return state;
  }
};

export default user;
