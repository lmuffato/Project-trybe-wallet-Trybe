// Coloque aqui suas actions
export const SET_EMAIL = 'SET_EMAIL';

export function setUserEmail(email) {
  return {
    type: SET_EMAIL,
    payload: email,
  };
}
