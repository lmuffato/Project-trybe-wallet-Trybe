import { LOGIN } from '../actions';

const initialState = {};

function user(state = initialState, action) {
  switch (action.type) {
  case LOGIN:
    return {
      email: action.payload.email,
    };
  default:
    return state;
  }
}
export default user;
