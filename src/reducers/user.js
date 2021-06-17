import { USERLOGIN } from '../actions';

const initialState = {
  user: {
    email: '',
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case USERLOGIN:
    return {
      email: payload.email,
      password: payload.password,
    };
  default:
    return state;
  }
}
