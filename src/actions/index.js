export const EMAIL = 'email';

export const actionEmail = (value) => ({
  type: EMAIL,
  payload: {
    value,
  },
});
