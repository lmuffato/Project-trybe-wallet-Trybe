// // Esse reducer será responsável por tratar as informações da pessoa usuária
// const INITIAL_STATE = {
//   email: '',
// };

// function user(state = INITIAL_STATE, action) {
//   switch (action.type) {
//   case 'LOGIN':
//     return { ...state, email: action.value };
//   case 'USER_EMAIL':
//     return { state };
//   default:
//     return state;
//   }
// }

// export default user;
const INITIAL_STATE = {
  email: '',
};

function saveUserEmail(email = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SAVE_EMAIL':
    return { email: action.payload.email };
  default:
    return email;
  }
}

export default saveUserEmail;
