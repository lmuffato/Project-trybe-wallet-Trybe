import { LOGIN_DATA } from '../actions';

const INITIAL_STATE = {
  email: 'teste@teste.com',
  password: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN_DATA:
    return action.payload;
  default:
    return state;
  }
}

export default userReducer;
