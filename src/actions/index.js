// Coloque aqui suas actions
// const INITIAL_STATE = {
//   user: {
//     email: '',
//   },
//   wallet: {
//     currencies: [],
//     expenses: [],
//   },
// };

// {
//   type: LOGIN,
//   payload: {
//     text: 'armazena o email ao clicar no login',
//   }
// }

const loginAction = (value) => ({ type: 'LOGIN', value });

export default loginAction;
