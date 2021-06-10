import { GET_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};
const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_EMAIL:
    return { email: action.email };
  default:
    return state;
  }
};
export default user;

// Esse reducer será responsável por tratar as informações da pessoa usuária
