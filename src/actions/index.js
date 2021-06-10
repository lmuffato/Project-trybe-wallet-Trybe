// Coloque aqui suas actions
export const LOGIN = 'LOGIN';

export function login(id) {
  return ({
    type: LOGIN,
    id,
  });
}
