// Coloque aqui suas actions
export const SAVE_USER = 'SAVE_USER';
export const TYPED_EMAIL = 'TYPED_EMAIL';
export const TYPED_PASSWORD = 'TYPED_PASSWORD';

// action creator > funcao que retorna uma action
export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

// typedEmail
export const typedEmail = (payload) => ({
  type: TYPED_EMAIL,
  payload,
});

// typedEmail
export const typedPassword = (payload) => ({
  type: TYPED_PASSWORD,
  payload,
});
