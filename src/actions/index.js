// Coloque aqui suas actions
export const USER_WALLET = 'USER_WALLET';
export const WALLET = 'WALLET';

export const saveUser = (email) => ({
  type: USER_WALLET,
  email,
});
