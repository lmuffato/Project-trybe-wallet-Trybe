export const LOGIN = 'LOGIN';

export function userLogin(payload) {
  return {
    type: LOGIN,
    payload,
  };
}
