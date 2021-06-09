export const LOGIN = 'LOGIN';

const INITIAL_STATE = {
  email: '',
};

export function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return { email: action.payload };
  default:
    return state;
  }
}
