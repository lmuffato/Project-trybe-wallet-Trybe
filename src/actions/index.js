export const USER = 'USER';

export const login = (email, password) => ({
  type: USER,
  payload: {
    email,
    password,
  },
});
