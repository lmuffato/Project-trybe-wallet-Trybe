// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER } from '../actions/index';

const USER_INITIAL_STATE = {

  email: '',

};

const user = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
  case USER:
    return { email: action.payload }; // não tem spread do state pq só tem 1 atributo dentro //

  default:
    return state; // n há necessidade de spread pois estou apenas retornando meu estado inicial //
  }
};

export default user;
