export const login = (isAuth) => ({
  type: 'LOGIN_SUCCESS',
  payload: {
    isAuth,
  },
});

export const logout = (isAuth) => ({
  type: 'LOGOUT',
  payload: {
    isAuth,
  },
});
