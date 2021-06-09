// Esse reducer será responsável por tratar as informações da pessoa usuária
// import de TYPE_ACTIONS:
import { SAVE_USER } from '../actions';

const INITIAL_STATE = {
  allUsers: [],
  /* user: {
    email,
    password,
  },
  login: false, */
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_USER:
    return {
      ...state,
      allUsers: [...state, action.payload.user],
      /* user: {
        email: action.payload.user.email,
        password: action.payload.user.password,
        id: allUsers.length,
      },
      login: true, */
    };
  default:
    return state;
  }
}

export default userReducer;
