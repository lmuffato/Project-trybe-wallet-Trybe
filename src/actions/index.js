// Coloque aqui suas actions

const userLogin = (email) => ({
  type: 'LOGIN',
  user: {
    email,
  },
});

export default userLogin;
