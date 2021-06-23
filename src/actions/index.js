// Coloque aqui suas actions
export const USER = 'USER';
export const WALLET = 'WALLET';

export const user = (payload) => ({
  type: 'USER',
  payload,
});

export const wallet = (payload) => ({
  type: 'WALLET',
  payload,
});
