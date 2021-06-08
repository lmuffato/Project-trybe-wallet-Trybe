// Esse reducer será responsável por tratar as informações da pessoa usuária
const initial_state = {};

function userReducer(state = initial_state, action) {
  switch(action.type) {
    case 'LOGIN':
      return action.payload
    default:
      return state
  }
}

export default userReducer;