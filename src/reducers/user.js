// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  user: {
    email,
    password,
  },
};
// TYPE_ACTIONS:
const SAVE_USER = 'SAVE_USER';

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_USER:
    return state;
  default:
    return state;
  }
}
export default userReducer;
