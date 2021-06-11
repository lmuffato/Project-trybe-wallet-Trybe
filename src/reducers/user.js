import { USER } from '../actions/index';
// Dicas de Gabs instrutor Trybe. Função user passa o nome do state.

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER:
    return { ...state, action };
  default:
    return { ...state };
  }
};

export default user;
