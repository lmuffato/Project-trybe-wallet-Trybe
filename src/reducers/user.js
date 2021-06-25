import { USER_EMAIL } from '../actions/index'; // aqui acontece o import dos names das actions ('catalogadas' - prevenção erro)

const INITIAL_STATE = { // definição do estado inicial para aquele reducer especifico
  email: '',
};

const user = (state = INITIAL_STATE, { type, payload }) => { // reducer responsável por pacote de infos. 'switch' como gerenciador das actions
  switch (type) {
  case USER_EMAIL:
    return { ...state, email: payload };
  default:
    return state;
  }
};

export default user;
// Esse reducer será responsável por tratar as informações da pessoa usuária
