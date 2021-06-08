// Coloque aqui suas actions
export const USER_WALLET = 'USER_WALLET';
export const WALLET = 'WALLET';

export const saveUser = (user) => ({
  type: USER_WALLET,
  user,
});

export const saveWallet = (wallet) => ({
  type: WALLET,
  wallet,
});
