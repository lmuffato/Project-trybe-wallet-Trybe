// Coloque aqui suas actions

export const ADD_EMAIL = 'ADD_EMAIL';

export function addEmail(payload) {
  return {
    type: ADD_EMAIL,
    payload,
  };
}
