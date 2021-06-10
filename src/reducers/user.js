import { ADD_EMAIL } from '../actions';

const initialState = {
  email: '',
  password: '',
};

function user(state = initialState, action) {
  switch (action.type) {
  case ADD_EMAIL:
    return action.payload;
  default:
    return state;
  }
}

export default user;
