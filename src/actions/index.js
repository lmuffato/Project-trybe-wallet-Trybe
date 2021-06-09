// Coloque aqui suas actions

export const setEmailAction = (email) => ({
  type: 'TYPED_EMAIL',
  payload: {
    email,
  },
});

export const setPasswordAction = (password) => ({
  type: 'TYPED_PASSWORD',
  payload: {
    password,
  },
});

export const emailIsValidAction = () => ({
  type: 'EMAIL_IS_VALID',
});

export const passwordIsValidAction = () => ({
  type: 'PASSWORD_IS_VALID',
});
