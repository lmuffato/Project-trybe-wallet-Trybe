// Esse reducer será responsável por tratar as informações da pessoa usuária
// import de TYPE_ACTIONS:
import { SAVE_USER, TYPED_EMAIL } from '../actions';
// , TYPED_PASSWORD

const INITIAL_STATE = {
  allUsers: [],
  user: {
    email: 'email1',
    password: 'senha1',
  },
  login: false,
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_USER:
    return {
      ...state,
      allUsers: [...state, action.payload],
      login: true,
    };
  case TYPED_EMAIL:
    return {
      ...state,
      email: action.payload,
    };
  /*   case TYPED_PASSWORD:
    return {
      ...state,
      user: {
        ...state.user, password: action.payload,
      },
    }; */
  default:
    return state;
  }
}

export default userReducer;
