import { LOGIN_EMAIL } from '../actions';

const INIT_STATE = { email: '' };

const userReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case LOGIN_EMAIL: {
      return { email: action.email };
    };
    default: return state;
  };
};

export default userReducer;
