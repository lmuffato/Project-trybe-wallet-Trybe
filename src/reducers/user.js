import USER_EMAIL from '../common/typesAction';

const INITIAL_STATE = {
  email: '',
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_EMAIL:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}
