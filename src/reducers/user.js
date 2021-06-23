// Esse reducer será responsável por tratar as informações da pessoa usuária
function user(state = 0, action) {
  switch (action.type) {
  case 'TEST':
    return state + 1;
  default:
    return state;
  }
}

export default user;
