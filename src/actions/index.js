// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';

export const saveEmail = (value) => ({
  type: SAVE_EMAIL,
  payload: {
    value,
  },
});
