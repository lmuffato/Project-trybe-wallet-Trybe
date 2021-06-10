export const NEW_EMAIL = 'NEW_EMAIL';
export const TOTAL_VALUE = 'TOTAL_VALUE';

export const newEmail = (payload) => ({
  type: NEW_EMAIL,
  payload,
});

export const totalValue = (payload) => ({
  type: TOTAL_VALUE,
  payload,
});
