// // Coloque aqui suas actions

// const ADD_TO_WALLET = 'ADD_TO_WALLET';
export const LOGIN = 'LOGIN';

export const loginEmail = (email) => ({
  type: LOGIN,
  user: {
    email,
  },
});
