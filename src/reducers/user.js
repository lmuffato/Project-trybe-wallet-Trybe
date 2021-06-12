import { USER } from '../actions/index';
// Dicas de Gabs instrutor Trybe. Função user passa o nome do state.

const INITIAL_STATE = {
  email: '',
  password: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER:
    return {
      email: action.payload.state.email,
      password: action.payload.state.password,
    };
  default:
    return { ...state };
  }
};

export default user;
