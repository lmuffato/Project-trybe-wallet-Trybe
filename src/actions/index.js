// Coloque aqui suas actions
// src/actions/index.js
export const LOGIN = 'LOGIN';

export const addRegister = (value) => ({ type: 'ADD_REGISTER', data: value });
// export const login = (value) => (
//   { type: LOGIN,
//     value,
//   }
// );
// export const login = (email, password) => ({
//   type: LOGIN,
//   payload: {
//     email,
//     password,
//   },
// });
export const login = (value) => ({
  type: LOGIN,
  payload: {
    value,
  },
});
