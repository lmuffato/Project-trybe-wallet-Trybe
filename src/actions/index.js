export const USER = 'USER';
export const WALLET = 'WALLET';
export const TOTAL = 'TOTAL';

export const user = (payload) => ({
  type: USER,
  payload,
});

export const wallet = (payload) => ({
  type: WALLET,
  payload,
});

export const total = (payload) => ({
  type: TOTAL,
  payload,
});
