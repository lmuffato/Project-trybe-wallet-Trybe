// Coloque aqui suas actions
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

export const validadeEmail = (payload) => ({
  type: UPDATE_EMAIL,
  payload,
});

export const validadePassword = (payload) => ({
  type: UPDATE_PASSWORD,
  payload,
});
