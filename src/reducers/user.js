import {
  GET_LOGIN,
} from '../actions/index';

const INITIAL_STATE = {
  email: '',
  password: '',

};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LOGIN:
    console.log(action);
    return {
      ...state,
      email: action.payload.state.email,
      password: action.payload.state.password,
    };
  default:
    return {
      ...state,
    };
  }
};

export default user;
